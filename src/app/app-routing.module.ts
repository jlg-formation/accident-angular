import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './route/home/home.component';
import { HistoComponent } from './route/histo/histo.component';
import { ChoroplethComponent } from './route/choropleth/choropleth.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'histo', component: HistoComponent },
  { path: 'choropleth', component: ChoroplethComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
