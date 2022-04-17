import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { SysConst } from '../../model';
import { utils } from '../../utils';

@Injectable()
export class NgxRequestRetryInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!utils.allNotNull(SysConst.SysRequestApi.REQUEST_ENABLED_RETRY_TIMES) ||
      SysConst.SysRequestApi.REQUEST_ENABLED_RETRY_TIMES === false) {
      return next.handle(request);
    }

    return next.handle(request).pipe(retry(SysConst.SysRequestApi.REQUEST_RETRY_TIMES));
  }
}
