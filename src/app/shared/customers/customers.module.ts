import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { BarChartModule } from '@swimlane/ngx-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CustomerProvider } from '../../providers/customers.provider';
import { DataTableModule } from '../data-table/data-table.module';


@NgModule({
    declarations: [CustomersComponent],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        DataTablesModule,
        DataTableModule,
        BarChartModule,
        Ng2SearchPipeModule,
        CommonModule,
        
    ],
    exports: [CustomersComponent],
    providers: [
        {
            provide: CustomerProvider,
        },
    ],
})
export class CustomersModule {}
