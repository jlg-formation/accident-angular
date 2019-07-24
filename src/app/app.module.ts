import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './route/home/home.component';
import { HistoComponent } from './route/histo/histo.component';
import { LayoutModule } from './layout/layout.module';
import { DatavizModule } from './dataviz/dataviz.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    DatavizModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
