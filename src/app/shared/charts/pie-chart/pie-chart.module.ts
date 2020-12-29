import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PieChartComponent } from './pie-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [PieChartComponent],
    imports: [CommonModule, FormsModule, CommonModule, NgbModule, ChartsModule],
    exports: [PieChartComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PieChartsModule {}
