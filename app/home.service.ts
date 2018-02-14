import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfigService } from './app-config.service.ts';

@Injectable()
export class AppConfigService {
    private token:string;

    constructor( appConfig:AppConfigService; http:Http){}

    connection(username:string){
      this.http
          .post(this.appConfig.uri + '/auth', { username: username })
          .subscribe(resp => this.token = resp.json());
    }
}
