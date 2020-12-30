import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { MerchantComponent } from './merchant.component';
import { MerchantRoutingModule } from './merchant-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarsChartComponent } from 'src/app/shared/charts/bars-chart/bars-chart.component';
import { SingleBarModule } from 'src/app/shared/charts/single-bar/single-bar.module';

@NgModule({
  imports: [
    CommonModule,
    MerchantRoutingModule,
    NgxChartsModule,
    ChartsModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    SingleBarModule,
  ],
  exports: [MerchantComponent],
  declarations: [MerchantComponent, BarsChartComponent],
  providers: [],
})
export class MerchantModule {}
