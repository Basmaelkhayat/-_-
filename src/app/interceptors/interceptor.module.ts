import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpHeaders,
    HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { SERVER } from '../environment/index';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
    constructor(private _CookieService: CookieService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this._CookieService.get('zeal-token');
        const authObj = authToken ? { Authorization: `Bearer ${authToken}` } : {};

        const dupReq = req.clone({
            url: `${SERVER}/${req.url}`,
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                ...authObj,
            }),
        });
        return next.handle(dupReq);
    }
}
@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpsRequestInterceptor,
            multi: true,
        },
    ],
})
export class InterceptorModule {}
