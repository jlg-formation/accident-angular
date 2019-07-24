import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './route/home/home.component';
import { HistoComponent } from './route/histo/histo.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'histo', component: HistoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
