import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarDiagramComponent } from './bar-diagram/bar-diagram.component';



@NgModule({
  declarations: [BarDiagramComponent],
  imports: [
    CommonModule
  ],
  exports: [BarDiagramComponent]
})
export class DatavizModule { }
