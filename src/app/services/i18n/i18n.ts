import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class i18n {
  public lang: object = {};
  private title: string = 'internationalization: Language files';

  constructor(private http: Http) {}

  public geti18nFile(): Promise<any> {
    return this.http.get('http://localhost:3002/language')
      .toPromise()
      .then(response => {
        this.lang = this.extractData(response);
        return this.lang;
      })
      .catch(this.handleErrorPromise);
  }

  private extractData(res: Response) {
    let body = res.json();

    return body;
  }

  private handleErrorObservable (error: Response | any) {
	  console.error(error.message || error);
  	return Observable.throw(error.message || error);
  }

  private handleErrorPromise (error: Response | any) {
	  console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
