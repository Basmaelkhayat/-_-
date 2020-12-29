import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { MemberComponent } from './member.component';
import { MemberRoutingModule } from './member-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemberPageModule } from './member-page/member-page.module';
import { RouterModule } from '@angular/router';
import { MemberRoutes } from './member.routing';

@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
    NgxChartsModule,
    ChartsModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forChild(MemberRoutes),
    MemberPageModule
  ],
  exports: [MemberComponent],
  declarations: [MemberComponent],
  providers: [],
})
export class MemberModule {}
