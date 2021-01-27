import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashierManagementComponent } from './cashier-management.component';

const routes: Routes = [{ path: '', component: CashierManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashierManagementRoutingModule {}
