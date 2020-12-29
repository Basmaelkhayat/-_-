import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DoughnutChartComponent } from './doughnut-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [DoughnutChartComponent],
    imports: [CommonModule, FormsModule, CommonModule, NgbModule, ChartsModule],
    exports: [DoughnutChartComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DoughnutChartsModule {}
