import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthGuard } from './guards';
import { MainLayoutComponent } from './main-layout/main-layout.component';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                loadChildren: './layouts/main-layout/main-layout.module#MainLayoutModule',
            },
        ],
    },
    // { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
        }),
    ],

    exports: [RouterModule],
})
export class AppRoutingModule {
    public constructor(private router: Router) {}
}
