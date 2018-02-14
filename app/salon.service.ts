import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfigService } from './app-config.service';
import { Salon } from './salon';
import {Message} from './message';

@Injectable()
export class SalonService {
    private token:string;
    private salons:Array<Salon>;
    private messages:Array<Message>;
    private idSalon:number;

    constructor(private appConfig:AppConfigService,private http:Http){}

    liste(){
      if(this.salons == null){
          this.http.get(this.appConfig.uri + '/canal').subscribe(resp => this.salons = resp.json());
          return new Array<Salon>();
        }
        else return this.salons;
    }

    findallMessage(idSalon:number){
      if(this.messages == null || idSalon!==this.idSalon){
          this.idSalon = idSalon;
          this.http.get(this.appConfig.uri + '/canal/'+idSalon + '/message').subscribe(resp => this.messages = resp.json());
          return new Array<Salon>();
        }
        else {
          return this.messages;
        }
    }
}
