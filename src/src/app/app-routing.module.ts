import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import {SectionDetailsComponent} from './section-details/section-details.component'

const routes: Routes = [
  {path: 'app-section-details', component : SectionDetailsComponent},
  {path : 'app-chart', component : ChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
