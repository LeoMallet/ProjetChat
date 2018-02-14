import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfigService } from './app-config.service';
import { Salon } from './salon';

@Injectable()
export class SalonService {
    private token:string;
    private salons:Array<Salon>;

    constructor(private appConfig:AppConfigService,private http:Http){}

    liste(){
      if(this.salons == null){
          this.http.get(this.appConfig.uri + '/canal').subscribe(resp => this.salons = resp.json());
          return new Array<Salon>();
        }
        else return this.salons;
    }
}
