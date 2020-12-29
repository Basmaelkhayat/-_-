import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberPageComponent } from './member-page.component';
import { CustomersModule } from 'src/app/shared/customers/customers.module';

@NgModule({
    declarations: [MemberPageComponent],
    imports: [CommonModule,CustomersModule],
    exports: [MemberPageComponent],
    providers: [],
})
export class MemberPageModule {}
