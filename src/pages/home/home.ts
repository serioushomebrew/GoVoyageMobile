import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeoplePage } from '../people/people';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  nextPage(){
  	this.navCtrl.push(PeoplePage, {}, {animate: true, direction:'forward', animation:'ios-transition'});
  }
}
