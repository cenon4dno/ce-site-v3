import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
import { Config } from 'app/config/config';

@Injectable()
export class Configuration {
  title: string = 'Environmental configurations';
  env: string = 'prod';
  content: string = '1';

   constructor(
     private http: Http,
     private location: Location,
     private config: Config
    ) {
    this.env = this.getEnv();
   }

  getConfig(): Promise<any> {
    var $host = this.getHost();

    return this.http.get($host)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  private getHost() {
    return this.config.getApiUrl();
  }

  private getEnv() {
    var env = 'prod';
    if (window.location.host.indexOf('localhost') > -1) {
      env = 'dev';
    } else if (window.location.host.indexOf('stage') > -1) {
      env = 'stage';
    }

    return env;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleErrorPromise (error: Response | any) {
    console.log(error);
    return Promise.reject(error.message || error);
  }
}
