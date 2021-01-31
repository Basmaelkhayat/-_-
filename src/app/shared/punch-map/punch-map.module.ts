import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PunchMapComponent } from './punch-map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { BarChartModule } from '@swimlane/ngx-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CustomerProvider } from '../../providers/customers.provider';
import { DataTableModule } from '../data-table/data-table.module';

@NgModule({
  declarations: [PunchMapComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbModule,
    ReactiveFormsModule,
    DataTableModule,
    BarChartModule,
    DataTablesModule,
  ],
  exports: [PunchMapComponent],
  providers: [
    {
      provide: CustomerProvider,
    },
  ],
})
export class PunchMapModule {}
