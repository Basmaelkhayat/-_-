import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { MerchantComponent } from './merchant.component';
import { MerchantRoutingModule } from './merchant-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarsChartModule } from '../../shared/charts/bars-chart/bars-chart.module';
import { SingleBarModule } from 'src/app/shared/charts/single-bar/single-bar.module';
import { CustomersModule } from 'src/app/shared/customers/customers.module';
import { AnalyticsModule } from './analytics/analytics.module';

@NgModule({
  imports: [
    CommonModule,
    MerchantRoutingModule,
    CustomersModule,
    AnalyticsModule,
  ],
  exports: [MerchantComponent],
  declarations: [MerchantComponent],
  providers: [],
})
export class MerchantModule {}
