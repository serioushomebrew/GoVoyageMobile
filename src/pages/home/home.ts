import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeoplePage } from '../people/people';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	temp : any;

  constructor(public navCtrl: NavController) {
  	this.temp = 15;
  }

  nextPage(){
  	this.navCtrl.push(PeoplePage, {temp : this.temp}, {animate: true, direction:'forward', animation:'ios-transition'});
  }
}
