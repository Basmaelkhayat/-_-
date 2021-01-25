import { Routes } from '@angular/router';

export const MainLayoutRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../../pages/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'merchants',
    loadChildren: () =>
      import('../../pages/merchant/merchant.module').then(
        (mod) => mod.MerchantModule
      ),
  },
  {
    path: 'members',
    loadChildren: () =>
      import('../../pages/member/member.module').then(
        (mod) => mod.MemberModule
      ),
  },
  {
    path: 'businesses',
    loadChildren: () =>
      import('../../pages/businesses/businesses.module').then(
        (mod) => mod.BusinessesModule
      ),
  },
];
