import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberPageComponent } from './member-page/member-page.component';

import { MemberComponent } from './member.component';

const routes: Routes = [
    { path: '', component: MemberComponent },
    { path: 'member-page', component: MemberPageComponent },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MemberRoutingModule {}
