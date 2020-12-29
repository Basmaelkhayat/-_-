import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LineBarChartComponent } from './line-bar-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [LineBarChartComponent],
    imports: [CommonModule, FormsModule, CommonModule, NgbModule, ChartsModule],
    exports: [LineBarChartComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LineBarChartsModule {}
