import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, Input } from '@angular/core';
import { Http } from '@angular/http';
import { HomeService } from './home.service';


@Component({


    templateUrl: 'app/home.component.html'

})
export class HomeComponent {
    constructor(private service: HomeService) {
    }


    connect(username: string){
        this.service.connection();
    }
}




