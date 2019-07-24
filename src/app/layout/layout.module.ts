import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, BodyComponent, LayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, BodyComponent, LayoutComponent]
})
export class LayoutModule { }
