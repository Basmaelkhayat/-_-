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
                        data: [50,50],
                        backgroundColor: [
                            'rgb(60 196 128)',
                            'rgb(255 96 96)',
                        ],
                    },
                ],
                labels: ['Males', 'Females'],
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
