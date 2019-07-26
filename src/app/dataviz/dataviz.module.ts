import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarDiagramComponent } from './bar-diagram/bar-diagram.component';
import { FrenchMapComponent } from './french-map/french-map.component';
import { WikidataImageListComponent } from './wikidata-image-list/wikidata-image-list.component';



@NgModule({
  declarations: [
    BarDiagramComponent,
    FrenchMapComponent,
    WikidataImageListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BarDiagramComponent,
    FrenchMapComponent,
    WikidataImageListComponent]
})
export class DatavizModule { }
