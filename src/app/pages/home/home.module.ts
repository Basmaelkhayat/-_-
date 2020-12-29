import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarsChartModule } from '../../shared/charts/bars-chart/bars-chart.module';
import { CustomersModule } from '../../shared/customers/customers.module';
import { DoughnutChartsModule } from '../../shared/charts/doughnut-chart/doughnut-chart.module';
import { LineChartsModule } from '../../shared/charts/line-chart/line-chart.module';
import { LineBarChartsModule } from '../../shared/charts/line-bar-chart/line-bar-chart.module';
import { DataTablesModule } from 'angular-datatables';
import { DataTableModule } from '../..//shared/data-table/data-table.module';
import { RouterModule } from '@angular/router';
import { PieChartsModule } from '../../shared/charts/pie-chart/pie-chart.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxChartsModule,
    ChartsModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    CustomersModule,
    BarsChartModule,
    DoughnutChartsModule,
    LineChartsModule,
    LineBarChartsModule,
    DataTableModule,
    CommonModule,
    RouterModule,
    NgxChartsModule,
    FormsModule,
    DataTablesModule,
    ChartsModule,
    PieChartsModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
