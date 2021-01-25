import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessesPageRoutingModule } from './businesses-page-routing.module';
import { BusinessesPageComponent } from './businesses-page.component';
import { ToggleButtonModule } from 'src/app/shared/toggle-button/toggle-button.module';

@NgModule({
  declarations: [BusinessesPageComponent],
  imports: [CommonModule, BusinessesPageRoutingModule, ToggleButtonModule],
  exports: [BusinessesPageComponent],
})
export class BusinessesPageModule {}
