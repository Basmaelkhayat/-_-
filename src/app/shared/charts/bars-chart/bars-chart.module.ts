import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarsChartComponent } from './bars-chart.component';
import { DecimalPipe } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    ChartsModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  exports: [BarsChartComponent],
  declarations: [BarsChartComponent],
  providers: [DecimalPipe],
})
export class BarsChartModule {}
