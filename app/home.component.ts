import { ActivatedRoute, Router } from '@angular/router';
import { Component, HostListener, Input } from '@angular/core';
import { Http } from '@angular/http';
import { HomeService } from './home.service';


@Component({
    templateUrl: 'app/home.component.html',
    providers : [HomeService]
})
export class HomeComponent {

    private username:string;

    constructor(private service: HomeService, private router: Router) {
    }

    connect(){
        this.service.connection(this.username);
        this.router.navigate([ '/salon' ]);
    }
}
