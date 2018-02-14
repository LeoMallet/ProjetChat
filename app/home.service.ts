import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfigService } from './app-config.service';

@Injectable()
export class HomeService {
<<<<<<< HEAD
    private token: string;
=======
    private token:string;
    //private proprietaire:Proprietaire;
>>>>>>> master

    constructor(private appConfig: AppConfigService, private http: Http) { }

<<<<<<< HEAD
    connection(nom_utilisateur: string) {
       return  this.http.get(this.appConfig.uri + '/canal').subscribe(resp => this.token = resp.json());
=======
    connection(nom:string){
       this.http.post(this.appConfig.uri + '/auth', { username: nom}).subscribe(resp => this.token = resp.json());
       //this.proprietaire.token = this.token;
>>>>>>> master
    }
}
