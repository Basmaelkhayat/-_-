import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bars-chart',
  templateUrl: './bars-chart.component.html',
  styleUrls: ['./bars-chart.component.scss'],
})
export class BarsChartComponent implements OnInit {
  start: any;
  end: any;
  newData: any[] = [];
  returningData: any = null;
  labelData: any[] = [];
  chartData: any;
  labels: any;
  @Input() punches: any = [];
  constructor() {}

  ngOnInit(): void {
    this.returningData = [5, 10, 20, 30];
    this.labelData = [5, 10, 20, 30];
    this.chartData = [
      {
        data: this.punches.current.map((v) => v.amount),
      },
      {
        data: this.punches.new.map((v) => v.amount),
      },
    ];
    this.labels = this.punches.current.map((v) => v.name);
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
      backgroundColor: 'rgb(0, 0, 0)',
    },
  ];

  // CHART CLICK EVENT.
  onChartClick(event) {}
}
