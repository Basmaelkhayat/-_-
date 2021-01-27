import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
} from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'line-curve-chart',
  templateUrl: './line-curve-chart.component.html',
  styleUrls: ['./line-curve-chart.component.scss'],
})
export class LineCurveChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Desktops',
          data: [0, 17, 10, 22, 18, 38, 23, 40, 42],
          color: '#009F87',
        },
        {
          name: 'Desktops',
          data: [0, 10, 5, 17, 13, 28, 13, 20, 30],
          color: '#072D45',
        },
        {
          name: 'Desktops',
          data: [0, 5, 1, 8, 12, 14, 2, 13, 1],
          color: '#7764E4',
        },
      ],

      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        lineCap: 'round',
        width: 6,
        dashArray: 0,
      },

      grid: {
        strokeDashArray: 3,
        borderColor: '#8898AA',
        row: {
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    };
  }

  ngOnInit(): void {}
}
