import { ActivatedRoute, Router } from '@angular/router';
import { Component, HostListener, Input } from '@angular/core';
import { Http } from '@angular/http';
import { SalonService } from './salon.service';
import { Salon } from './salon';

@Component({
  templateUrl: 'app/salon.component.html',
  providers : [SalonService]
})
export class SalonComponent {
  private salons:Array<Salon>;

  constructor(private service:SalonService, private router:Router) {
  }

  listeSalon(){
    return this.service.liste();
  }

}
