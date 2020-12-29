import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import * as Chart from 'chart.js';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
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
                        type: 'line',
                        backgroundColor: 'rgb(238 60 98)',
                        borderColor: 'rgb(238 60 98)',
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
}
