import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarDiagramComponent } from './bar-diagram/bar-diagram.component';
import { FrenchMapComponent } from './french-map/french-map.component';



@NgModule({
  declarations: [BarDiagramComponent, FrenchMapComponent],
  imports: [
    CommonModule
  ],
  exports: [BarDiagramComponent, FrenchMapComponent]
})
export class DatavizModule { }
