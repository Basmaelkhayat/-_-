import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { MerchantComponent } from './merchant.component';
import { MerchantRoutingModule } from './merchant-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MerchantRoutingModule,
    NgxChartsModule,
    ChartsModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  exports: [MerchantComponent],
  declarations: [MerchantComponent],
  providers: [],
})
export class MerchantModule {}
