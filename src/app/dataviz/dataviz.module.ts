import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarDiagramComponent } from './bar-diagram/bar-diagram.component';
import { FrenchMapComponent } from './french-map/french-map.component';
import { WikidataImageListComponent } from './wikidata-image-list/wikidata-image-list.component';
import { NiceDatePipe } from './nice-date.pipe';



@NgModule({
  declarations: [
    BarDiagramComponent,
    FrenchMapComponent,
    WikidataImageListComponent,
    NiceDatePipe],
  imports: [
    CommonModule
  ],
  exports: [
    BarDiagramComponent,
    FrenchMapComponent,
    WikidataImageListComponent,
    NiceDatePipe]
})
export class DatavizModule { }
