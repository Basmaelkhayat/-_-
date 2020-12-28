import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    //canActivate: [AuthGuard],
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../app/pages/home/home.module').then((mod) => mod.HomeModule),
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
