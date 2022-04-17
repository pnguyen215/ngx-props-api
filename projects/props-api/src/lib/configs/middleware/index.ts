import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxRequestCacheInterceptor } from './ngx-request-cache.interceptor';
import { NgxRequestRetryInterceptor } from './ngx-request-retry.interceptor';

export const interceptorProviders = [

    // { provide: HTTP_INTERCEPTORS, useClass: null, multi: true }, // from http request
    { provide: HTTP_INTERCEPTORS, useClass: NgxRequestCacheInterceptor, multi: true }, // from cache request
    { provide: HTTP_INTERCEPTORS, useClass: NgxRequestRetryInterceptor, multi: true }, // from retry request
    // { provide: HTTP_INTERCEPTORS, useClass: NgxLogsReqInterceptor, multi: true }, // from logging request
];

