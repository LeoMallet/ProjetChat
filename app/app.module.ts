import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SalonComponent } from './salon.component';
import { SalonDetailComponent } from './salon-detail.component';
import { AppConfigService} from '/app-config.service';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'salon', component: SalonComponent },
    { path: 'salon/:id', component: SalonDetailComponent }
]

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
    ],

    providers: [AppConfigService],

    declarations: [
        AppComponent,
        HomeComponent,
        SalonComponent,
        SalonDetailComponent
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
