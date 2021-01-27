import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierManagementRoutingModule } from './cashier-management-routing.module';
import { CashierManagementComponent } from './cashier-management.component';
import { MembersModule } from './members/members.module';

@NgModule({
  declarations: [CashierManagementComponent],
  imports: [CommonModule, CashierManagementRoutingModule, MembersModule],
  exports: [CashierManagementComponent],
})
export class CashierManagementModule {}
