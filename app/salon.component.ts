import { ActivatedRoute, Router } from '@angular/router';
import { Component, HostListener, Input } from '@angular/core';
import { Http } from '@angular/http';
import { SalonService } from './salon.service';
import { Salon } from './salon';
import {Message} from './message';

@Component({
  templateUrl: 'app/salon.component.html',
  providers : [SalonService]
})
export class SalonComponent {

  private messages:Array<Message>;
  private onSalon:boolean=false;

  constructor(private service:SalonService, private router:Router) {
  }

  listeSalon(){
    return this.service.liste();
  }

  selectionSalon(idSalon:number){
    this.messages=this.service.findallMessage(idSalon);
    this.onSalon=true;
  }

}
