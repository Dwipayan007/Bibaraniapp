import { Component } from '@angular/core';
import {carosuelComponent} from '../app/Components/carosuelComponent';
import {routeComponent} from '../app/Components/routeComponent';
import {homeComponent} from '../app/Components/homeComponent';

@Component({
  selector: 'my-app',
  templateUrl:'../app/Views/app.html',  
})

export class AppComponent  { 
  name = 'Angular';
 }
