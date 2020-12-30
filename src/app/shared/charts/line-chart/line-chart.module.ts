import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LineChartComponent } from './line-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [LineChartComponent],
    imports: [CommonModule, FormsModule, CommonModule, NgbModule, ChartsModule],
    exports: [LineChartComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LineChartsModule {}
