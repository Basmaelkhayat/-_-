import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import * as Chart from 'chart.js';

@Component({
    selector: 'app-line-bar-chart',
    templateUrl: './line-bar-chart.component.html',
    styleUrls: ['./line-bar-chart.component.css'],
})
export class LineBarChartComponent implements OnInit {
    mixedChart: any = [];
    ngOnInit() {
        this.mixedChart = new Chart('bar', {
            type: 'bar',
            options: {
                legend: {
                    display: false,
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                    },
                },
            },
            data: {
                datasets: [
                    {
                        data: [30, 40, 50, 70, 80, 40, 44, 80, 40, 35, 20, 40],
                        type: 'lineBar',
                        backgroundColor: 'rgb(238 60 98)',
                        borderColor: 'rgb(238 60 98)',
                        fill: false,
                    },
                    {
                        barPercentage: 0.5,
                        categoryPercentage: 0.3,
                        type: 'bar',
                        data: [80, 110, 80, 40, 80, 115, 30, 115, 80, 40, 80, 10, 30],
                        backgroundColor: 'rgb(0, 159, 136)',
                        borderColor: 'rgb(0, 159, 136)',
                        fill: false,
                    },
                ],
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                ],
            },
        });
    }

    // lineBarChartData: ChartDataSets[] = [
    //   { data: [85, 72, 78, 75, 77, 75]},
    // ];

    // lineBarChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

    // lineBarChartOptions = {
    //   responsive: true,
    // };
    // datasetOverride = [
    //   {
    //     label: "Bar chart",
    //     borderWidth: 1,
    //     type: 'bar'
    //   },
    //   {
    //     label: "LineBarBar chart",
    //     borderWidth: 3,
    //     hoverBackgroundColor: "rgba(255,99,132,0.4)",
    //     hoverBorderColor: "rgba(255,99,132,1)",
    //     type: 'lineBar'
    //   }
    // ];
    // lineBarChartColors: Color[] = [
    //   {
    //     borderColor: '#EE3C62',
    //     backgroundColor: '#f0f8ff00',
    //   },
    // ];

    // lineBarChartLegend = true;
    // lineBarChartPlugins = [];
    // lineBarChartType = 'lineBar';
}
