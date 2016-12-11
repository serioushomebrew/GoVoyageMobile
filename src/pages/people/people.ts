import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { BudgetPage } from '../budget/budget';
/*
  Generated class for the People page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-people',
  templateUrl: 'people.html'
})
export class PeoplePage {
	temp: any;
	people: any;
  constructor(public navParams: NavParams, public navCtrl: NavController) {
  	this.temp = navParams.get('temp');
  	this.people = 1;
  	console.log(this.temp);
  }

  nextPage(){
  	this.navCtrl.push(BudgetPage, { temp: this.temp, people: this.people}, {animate: true, direction:'forward', animation:'ios-transition'});
  }

}
