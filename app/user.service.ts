import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfigService } from './app-config.service';
import { User } from './user';


@Injectable()
export class UserService {
    private token: string;


    constructor(private appConfig: AppConfigService, private http: Http) { }

    liste(username) {
        
        this.http.post(this.appConfig.uri + '/auth',{username:username}).subscribe(resp => {
                resp.json().username; 
                resp.json().token;
            })
            
        }

}
