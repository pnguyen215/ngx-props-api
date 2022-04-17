import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { utils, stringUtils, json } from '../utils';


@Injectable({
  providedIn: 'root'
})
export class NgxStoragesService {

  localStorage: Storage;

  subject = new Subject();

  constructor() {
    this.localStorage = window.localStorage;
  }

  get isStorageSupported(): boolean {
    return !!this.localStorage;
  }

  get(key: string): any {

    if (!utils.allNotNull(key)) {
      return null;
    }

    if (this.isStorageSupported) {
      return JSON.parse(this.localStorage.getItem(stringUtils.trimSingleQuotes(key)));
    }

    return null;
  }

  set(key: string, value: any): boolean {

    if (!utils.allNotNull(key) || !utils.allNotNull(value)) {
      return false;
    }

    if (this.isStorageSupported) {
      this.localStorage.setItem(stringUtils.trimSingleQuotes(key), json.toJsonDefault(value));

      this.subject.next({
        type: 'set',
        key,
        value
      });

      return true;
    }

    return false;
  }

  remove(key: string): boolean {

    if (!utils.allNotNull(key)) {
      return false;
    }

    if (this.isStorageSupported) {
      this.localStorage.removeItem(stringUtils.trimSingleQuotes(key));

      this.subject.next({
        type: 'remove',
        key
      });

      return true;
    }

    return false;
  }

}
