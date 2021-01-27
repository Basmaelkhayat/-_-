import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineCurveChartComponent } from './line-curve-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [LineCurveChartComponent],
  imports: [CommonModule, NgApexchartsModule],
  exports: [LineCurveChartComponent],
})
export class LineCurveChartModule {}
