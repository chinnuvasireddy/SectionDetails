import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartType,ChartData } from 'chart.js';
import { ChartService } from './../chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(public service : ChartService, private readonly route : Router) { }

  chartType: ChartType = 'pie';
  chartLabels = ['Grade1', 'Grade2', 'Grade3'];
  chartDatasets : ChartData = {
    labels: this.chartLabels,
    datasets: [
      {
        data: [5, 3, 1],
        backgroundColor: ["red", "green", "blue"],
        hoverBackgroundColor: ["darkred", "darkgreen", "darkblue"],
      }
    ]
  };

  ngOnInit() {
    this.service.selectedGrade = '';
  }

  chartClicked(event : any) {
    const index = event.active[0].index;
    this.service.selectedGrade = this.chartLabels[index];
    this.route.navigate(['/app-section-details']);
  }



}
