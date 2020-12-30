import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bars-chart',
  templateUrl: './bars-chart.component.html',
  styleUrls: ['./bars-chart.component.scss'],
})
export class BarsChartComponent implements OnInit {
  start: any;
  end: any;
  chartData: any;
  labels: any;
  @Input() punches: any = [];
  constructor() {}

  ngOnInit(): void {
    this.chartData = [
      {
        data: this.punches?.current.map((v) => v.amount),
      },
      {
        data: this.punches?.new.map((v) => v.amount),
      },
    ];
    this.labels = this.punches?.current.map((v) => v.name);
  }
  ngOnChanges() {}
  // ADD CHART OPTIONS.
  chartOptions = {
    responsive: true, // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).

    layout: {
      padding: {
        left: 15,
        right: 15,
        top,
        bottom: 0,
      },
    },
    scales: {
      xAxes: {
        ticks: {
          beginAtZero: true,
        },
      },
      dataset: [
        {
          barPercentage: 0.2,
          categoryPercentage: 0.3,
        },
      ],
    },
  };

  // CHART COLOR.
  colors = [
    {
      // 1st Year.
      backgroundColor: 'rgb(0, 159, 136)',
    },
    {
      // 2nd Year.
      backgroundColor: 'rgb(6, 44, 69)',
    },
  ];

  // CHART CLICK EVENT.
  onChartClick(event) {}
}
