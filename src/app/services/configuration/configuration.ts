import {Injectable} from '@angular/core';
import {Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Location} from '@angular/common';
import {DOCUMENT} from '@angular/platform-browser';

@Injectable()
export class Configuration {
  title: string = 'Environmental configurations';

   constructor(private http: Http, private location: Location, @Inject(DOCUMENT) private document) {}

  getConfig(): Promise<any> {
    var $host = this.getHost();
    return this.http.get($host)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  private getHost() {
    var $url = '';
    if (window.location.host.indexOf('localhost') > -1) {
      $url = 'http://localhost:3001/config';
    } else {
      $url = 'http://json-server.cenonebora.com/config';
    }

    return $url;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleErrorPromise (error: Response | any) {
	  console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
