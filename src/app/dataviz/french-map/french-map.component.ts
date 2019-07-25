import { Component, OnInit, ElementRef, ViewEncapsulation, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import { json } from 'd3';

@Component({
  selector: 'app-french-map',
  templateUrl: './french-map.component.html',
  styleUrls: ['./french-map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FrenchMapComponent implements OnInit, OnChanges {


  @Input() json: any;

  constructor(private elt: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    if (changes.json.currentValue) {
      this.draw();
    }
  }

  ngOnInit() {
  }

  async draw() {

    // inspired by https://bl.ocks.org/bricedev/97c53d6ed168902239f7

    const width = 960;
    const height = 960;
    const scale = 4500;

    const formatNumber = d3.format('s');



    const populationBins = this.getBins(this.json);
    const colorBins = populationBins.map(n => `hsl(240, 30%, ${100 - n * 100 / 3000000}%)`);

    const color = d3.scaleThreshold<number, string>()
      .domain(populationBins)
      .range(['#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b']);

    const x = d3.scaleLinear()
      .domain([77156, 2579208])
      .range([0, 300]);

    const xAxis = d3.axisBottom(x)
      .tickSize(13)
      .tickValues(color.domain())
      .tickFormat(d => formatNumber(d));

    const projection = d3.geoAlbers()
      .center([0, 49.5])
      .rotate([-2.8, 3])
      .parallels([45, 55])
      .scale(scale)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath()
      .projection(projection);

    const tooltip = d3.select(this.elt.nativeElement).append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);

    const svg = d3.select(this.elt.nativeElement).append('svg')
      .attr('viewBox', `0 0 ${width} ${height}`);

    const g = svg.append('g')
      .attr('class', 'key')
      .attr('transform', 'translate(' + 40 + ',' + 40 + ')');

    g.selectAll('rect')
      .data(color.range().map((currentColor) => {
        const d = color.invertExtent(currentColor);
        if (d[0] == null) { d[0] = x.domain()[0]; }
        if (d[1] == null) { d[1] = x.domain()[1]; }
        return d;
      }))
      .enter().append('rect')
      .attr('height', 8)
      .attr('x', (d) => x(d[0]))
      .attr('width', (d) => x(d[1]) - x(d[0]))
      .style('fill', (d) => color(d[0]));

    g.call(xAxis).append('text')
      .attr('class', 'caption')
      .attr('y', -6)
      .text('Population');

    const france: any = await d3.json('assets/geojson/departements.json');
    const population = await d3.csv('assets/data/population-departement.csv');
    // const population = this.json;
    console.log('population', population);

    const regions = svg.selectAll('.departements')
      .data(france.features)
      .enter().append('path')
      .attr('class', 'departements')
      .attr('d', path)
      .style('fill', (departement: any) => {
        const paringData: any = population.filter((pop) => departement.properties.code === pop.numero)[0];
        return paringData ? color(paringData.population.replace(/,/g, '')) : color(0);
      })
      .on('mouseover', (d: any) => {
        const paringData = population.filter((pop) => d.properties.code === pop.numero)[0];
        tooltip.transition()
          .duration(200)
          .style('opacity', .9);
        tooltip.html(`${d.properties.nom} (${d.properties.code}): ${paringData.population.replace(/,/g, ' ')}`)
          .style('left', (d3.event.pageX + 5) + 'px')
          .style('top', (d3.event.pageY - 180) + 'px');
      })
      .on('mouseout', (d) => {
        tooltip.transition()
          .duration(500)
          .style('opacity', 0);
      });
  }

  getBins(json: any) {
    return [250000, 500000, 750000, 1000000, 1250000, 1500000, 2000000, 3000000];
  }

}
