import {Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {homeService} from '../Services/homeService';


@Component({
    selector:'home-data',
    templateUrl:'../app/Views/home.html'
})

export class homeComponent  {

  // Private property for binding
  mydata: Observable<string[]>;
  data: Observable<string[]>;

  constructor(private hService: homeService) {

  }

  // Load data ones componet is ready
  getData() {
    // Pass retreived pets to the property
    this.mydata = this.hService.getData();
  }

  findById(id:string){
      this.data=this.hService.findById(id);
  }
}
