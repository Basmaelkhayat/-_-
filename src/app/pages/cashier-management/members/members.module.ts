import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';
import { FormsModule } from '@angular/forms';
import { LineCurveChartModule } from 'src/app/shared/charts/line-curve-chart/line-curve-chart.module';

@NgModule({
  declarations: [MembersComponent],
  imports: [
    CommonModule,
    MembersRoutingModule,
    FormsModule,
    LineCurveChartModule,
  ],
  exports: [MembersComponent],
})
export class MembersModule {}
