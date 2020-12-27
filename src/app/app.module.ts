import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AuthGuard } from './guards/auth.guard';
import { InterceptorModule } from './interceptors/interceptor.module';
@NgModule({
    declarations: [AppComponent, MainLayoutComponent],
    imports: [
        BrowserAnimationsModule,
        // InterceptorModule,
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        NavbarComponent
    ],

    providers: [CookieService, AuthGuard],
    bootstrap: [AppComponent],
})
export class AppModule {}
