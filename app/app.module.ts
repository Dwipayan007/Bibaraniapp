import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule,JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import {homeComponent} from '../app/Components/homeComponent';
import {aboutComponent} from '../app/Components/aboutComponent';
import {loginComponent} from '../app/Components/loginComponent';
import {pagenotfoundComponent} from '../app/Components/pagenotfoundComponent';
import {homeService} from '../app/Services/homeService';
import {carosuelComponent} from '../app/Components/carosuelComponent';
import {routeComponent} from '../app/Components/routeComponent';
 const appRoute: Routes=[
  {path: 'home' ,component:homeComponent},
  {path:'about',component:aboutComponent},
  {path:'login',component:loginComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:pagenotfoundComponent}
];

@NgModule({
  imports:      [
     BrowserModule, 
     RouterModule.forRoot(appRoute),
     FormsModule,
     HttpModule,
     JsonpModule
    ],
  declarations: [
    AppComponent,
    homeComponent,
    aboutComponent,
    loginComponent,
    pagenotfoundComponent,
    carosuelComponent,
    routeComponent
  ],
  
providers:[
    homeService
],
  bootstrap:    [ AppComponent,routeComponent,carosuelComponent,homeComponent ]
})
export class AppModule { };
