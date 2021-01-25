import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleBarModule } from 'src/app/shared/charts/single-bar/single-bar.module';
import { BarsChartModule } from 'src/app/shared/charts/bars-chart/bars-chart.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    NgxChartsModule,
    ChartsModule,
    FormsModule,

    ReactiveFormsModule,
    SingleBarModule,
    BarsChartModule,
    NgbModule,
  ],
  exports: [AnalyticsComponent],
})
export class AnalyticsModule {}
