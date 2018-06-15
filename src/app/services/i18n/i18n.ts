import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class i18n {
  public lang: object = {};

  constructor(private http: Http) {}

  public geti18nFile(config): Promise<any> {
    return this.http.get(config.configUrl + config.configPath)
      .toPromise()
      .then(response => {
        console.log('geti18nFile response',  response);
        this.lang = this.extractData(response);
        console.log('geti18nFile lang',  this.lang);
        return this.lang;
      })
      .catch(this.handleErrorPromise);
  }

  private extractData(res: Response) {
    let body = res.json();

    return body;
  }

  private handleErrorPromise (error: Response | any): Promise<any> {
	  console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
