import { Routes } from '@angular/router';

export const MemberRoutes: Routes = [
    {
        path: 'member-page',
        loadChildren: () =>
            import('../member/member-page/member-page.module').then(
                (mod) => mod.MemberPageModule
            ),
    },
];
