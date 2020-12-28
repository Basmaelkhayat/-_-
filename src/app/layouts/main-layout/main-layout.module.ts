import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from '../../interceptors/interceptor.module';
import { MainLayoutRoutes } from './main-layout.routing';
import { HomeModule } from 'src/app/pages/home/home.module';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(MainLayoutRoutes),
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        HttpClientModule,
        // InterceptorModule,
    ],
    declarations: [],
    providers: [],
})
export class MainLayoutModule {}
