import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class i18n {
  public lang: object = {};

  constructor(private http: Http) {}

  public geti18nFile(config): Promise<any> {
    var langConfig = config.find(conf => conf.code === 'CONTENT_API');
    return this.http.get(langConfig.configUrl + langConfig.configPath)
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

  private handleErrorPromise (error: Response | any): Promise<any> {
	  console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
