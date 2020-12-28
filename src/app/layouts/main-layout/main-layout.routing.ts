import { Routes } from '@angular/router';

export const MainLayoutRoutes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then((mod) => mod.HomeModule),
    },
    {
        path: 'merchants',
        loadChildren: () => import('../../pages/merchant/merchant.module').then((mod) => mod.MerchantModule),
    },
];
