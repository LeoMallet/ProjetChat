import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfigService } from './app-config.service';

@Injectable()
export class HomeService {
    private token:string;
    //private proprietaire:Proprietaire;

    constructor(private appConfig:AppConfigService,private http:Http){}

    connection(nom:string){
       this.http.post(this.appConfig.uri + '/auth', { username: nom}).subscribe(resp => this.token = resp.json());
       //this.proprietaire.token = this.token;
    }
}
