import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
    selector: 'app-doughnut-chart',
    templateUrl: './doughnut-chart.component.html',
    styleUrls: ['./doughnut-chart.component.css'],
})
export class DoughnutChartComponent implements OnInit {
    mixedChart: any = [];
    ngOnInit() {
        this.mixedChart = new Chart('doughnut', {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        data: [25, 25, 25, 25],
                        backgroundColor: [
                            'rgb(60 196 128)',
                            'rgb(255 96 96)',
                            'rgb(6 44 69)',
                            'rgb(158 167 178)',
                        ],
                    },
                ],
                labels: ['January', 'February', 'March', 'June'],
            },

            options: {
                legend: {
                    display: false,
                },
                cutoutPercentage: 70,
            },
        });
    }
}
