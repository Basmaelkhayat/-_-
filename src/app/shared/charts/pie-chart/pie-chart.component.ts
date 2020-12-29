import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import {
    SingleDataSet,
    Label,
    monkeyPatchChartJsLegend,
    monkeyPatchChartJsTooltip,
} from 'ng2-charts';

@Component({
    selector: 'pie-chart',
    templateUrl: 'pie-chart.component.html',
    styleUrls: ['pie-chart.component.scss'],
})
export class PieChartComponent {
    title = 'Angular Charts';
    view: any[] = [500, 500];
    pieChartLabels ;
    public pieChartOptions: ChartOptions = {
        responsive: true,
    };
    public pieChartData: SingleDataSet = [235.21, 95.21];
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartPlugins = [];

    constructor() {
        monkeyPatchChartJsTooltip();
        monkeyPatchChartJsLegend();
    }
    // CHART COLOR.
    pieChartColor: any = [
        {
            backgroundColor: ['rgb(6, 44, 69)', 'rgb(23,159,136)'],
        },
    ];
}
