import { Injectable } from '@angular/core';

@Injectable()
export class Config {
  private apiCollectionUrl: string = "https://jjbxaqu2hd.execute-api.ap-southeast-1.amazonaws.com/dev/getAllConfigs";

  constructor() {}

  public getApiUrl() {
    return this.apiCollectionUrl;
  }
}