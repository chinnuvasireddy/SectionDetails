import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { SectionDetailsComponent } from './section-details/section-details.component';
import { ChartComponent } from './chart/chart.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { NumberOnlyDirective } from './number-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    SectionDetailsComponent,
    ChartComponent,
    NumberOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
