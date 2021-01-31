import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberPageComponent } from './member-page.component';
import { CustomersModule } from 'src/app/shared/customers/customers.module';
import { PunchMapModule } from 'src/app/shared/punch-map/punch-map.module';

@NgModule({
    declarations: [MemberPageComponent],
    imports: [CommonModule,CustomersModule,PunchMapModule],
    exports: [MemberPageComponent],
    providers: [],
})
export class MemberPageModule {}
