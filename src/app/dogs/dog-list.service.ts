import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DogListService {
  constructor(private http: Http) { }

  public getDogList(): Observable<any> {
    return this.http
      .get('dog-list.json')
      .map((res: Response) => {
        let body = res.json();
        return body;
      })
      .catch((error: any) => {
        let errMsg = (error.message) ?
          error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        return Observable.throw(errMsg);
      });
  }
}
