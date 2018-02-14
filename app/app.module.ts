import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

const routes:Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'salon', component:SalonComponent },
  { path: 'salon/:id', component:SalonDetailComponent }
]

@NgModule({
    imports: [
        BrowserModule
    ],

    declarations: [
        AppComponent
    ],

    bootstrap: [ AppComponent ]
})
export class AppModule { }
