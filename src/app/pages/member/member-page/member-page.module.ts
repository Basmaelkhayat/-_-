import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberPageComponent } from './member-page.component';

@NgModule({
    declarations: [MemberPageComponent],
    imports: [CommonModule],
    exports: [MemberPageComponent],
    providers: [],
})
export class MemberPageModule {}
