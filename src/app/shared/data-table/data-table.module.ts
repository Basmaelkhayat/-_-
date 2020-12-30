import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
    declarations: [DataTableComponent],
    imports: [CommonModule, FormsModule, CommonModule, DataTablesModule],
    exports: [DataTableComponent],
})
export class DataTableModule {}
