import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, Input } from '@angular/core';
import { Http } from '@angular/http';
import { HomeService } from './home.service';
import

@Component({
    templateUrl: 'app/home.component.html',
    providers : [HomeService]
})
export class HomeComponent {

    private username:string;

    constructor(private service: HomeService) {
    }

    connect(username: string){
        this.service.connection(username);
    }
}
