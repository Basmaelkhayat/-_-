import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import * as Chart from 'chart.js';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent{
    lineChartData: ChartDataSets[] = [
      { data: [85, 72, 78, 75, 77, 75]},
    ];

    lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

    lineChartOptions = {
      responsive: true,
    };
    datasetOverride = [

      {
        label: "Line chart",
        borderWidth: 3,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        type: 'line'
      }
    ];
    lineChartColors: Color[] = [
      {
        borderColor: '#EE3C62',
        backgroundColor: '#f0f8ff00',
      },
    ];

    lineChartLegend = true;
    lineChartPlugins = [];
    lineChartType = 'line';
}
