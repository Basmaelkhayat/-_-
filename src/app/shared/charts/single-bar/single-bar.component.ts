import { Component, Input, OnInit } from '@angular/core';

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
  constructor() {
    console.log('h');
  }

  ngOnInit(): void {
    console.log(this.data);
    this.chartData = [
      {
        data: this.data.current.map((v) => v.amount),
      },
    ];
    this.labels = this.data.current.map((v) => v.name);
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
  ];

  // CHART CLICK EVENT.
  onChartClick(event) {}
}
