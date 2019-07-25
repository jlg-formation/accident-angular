import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-choropleth',
  templateUrl: './choropleth.component.html',
  styleUrls: ['./choropleth.component.scss']
})
export class ChoroplethComponent implements OnInit {

  killed: any;

  constructor() { }

  ngOnInit() {
    (async () => {
      this.killed = await this.generateKilledFile();
    })();
  }

  async generateKilledFile() {
    const usagers = await d3.csv('assets/data/usagers-2017.csv');
    const caracteristics = await d3.csv('assets/data/caracteristiques-2017.csv');
    const popdep = await d3.csv('assets/data/population-departement.csv');

    // filter on killed
    const killed = usagers.filter(r => r.grav === '2')
      .map(r => r.Num_Acc);
    const deps = killed.map(numAcc => {
      return caracteristics.find(r => r.Num_Acc === numAcc).dep;
    });
    const killedDep = deps.reduce((acc, n) => {
      acc[n] = (acc[n] === undefined) ? 1 : acc[n] + 1;
      return acc;
    }, {});
    killedDep['2A0'] = killedDep[201];
    killedDep['2B0'] = killedDep[202];
    console.log('killedDep', killedDep);
    const result = popdep.map(r => {
      const k = killedDep[r.numero + '0'];
      return {
        numero: r.numero,
        nom: r.nom,
        population: k + '',
      };
    });
    console.log('result', result);
    return result;
  }

}
