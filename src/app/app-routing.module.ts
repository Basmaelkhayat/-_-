import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthGuard } from './guards';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
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
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./layouts/main-layout/main-layout.module').then(
        (m) => m.MainLayoutModule
      ),
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
