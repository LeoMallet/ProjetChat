import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfigService } from './app-config.service';

@Injectable()
export class HomeService {
    private token:string;

    constructor(private appConfig:AppConfigService,private http:Http){}

    connection(nom_utilisateur:string){
      this.http
          .post(this.appConfig.uri + '/auth', { username: nom_utilisateur })
          .subscribe(resp => this.token = resp.json());
    }
}
