import { Component, Input, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-single-bar',
  templateUrl: './single-bar.component.html',
  styleUrls: ['./single-bar.component.scss'],
})
export class SingleBarComponent implements OnInit {
  start: any;
  end: any;
  chartData: any;
  labels: any;
  @Input() data: any = [];
  constructor(private _decimalPipe: DecimalPipe) {}

  ngOnInit(): void {
    this.chartData = [
      {
        data: this.data?.branches.map((v) => v.amount),
        barPercentage: 0.5,
        barThickness: 18,
        maxBarThickness: 18,
        minBarLength: 2,
      },
    ];
    this.labels = this.data?.branches.map((v) => v.name);
    console.log(this.data);
  }
  ngOnChanges() {}
  // ADD CHART OPTIONS.
  chartOptions = {
    responsive: true, // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
    tooltips: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      titleFontColor: 'rgba(6 ,44 ,69 , 1)',
      bodyFontColor: 'rgba(139 ,139 ,139 , 1)',
      xPadding: 18,
      yPadding: 18,
      borderColor: 'rgba(245 ,245 ,245 , 1)',
      displayColors: false,
      borderWidth: 5,
      callbacks: {
        label: (tooltipItem, data) => {
          return this._decimalPipe.transform(tooltipItem.yLabel) + 'EGP';
        },
      },
    },
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
          barPercentage: 0.1,
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
  ];

  // CHART CLICK EVENT.
  onChartClick(event) {}
}
