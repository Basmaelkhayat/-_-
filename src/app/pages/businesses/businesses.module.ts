import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessesRoutingModule } from './businesses-routing.module';
import { BusinessesComponent } from './businesses.component';
import { BusinessesPageModule } from './businesses-page/businesses-page.module';
import { SignUpsModule } from './sign-ups/sign-ups.module';

@NgModule({
  declarations: [BusinessesComponent],
  imports: [
    CommonModule,
    BusinessesRoutingModule,
    BusinessesPageModule,
    SignUpsModule,
  ],
  exports: [BusinessesComponent],
})
export class BusinessesModule {}
