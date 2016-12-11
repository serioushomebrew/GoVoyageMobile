import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { DatePage } from '../date/date';

@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html'
})
export class BudgetPage {
	temp: any;
	people: any;
	budget: any;
  constructor(public navParams: NavParams, public navCtrl: NavController) {
  		this.temp = navParams.get('temp');
  		this.people = navParams.get('people');
  		this.budget = '300,00';
  }

  nextPage(){
  	this.navCtrl.push(DatePage, {temp: this.temp, people: this.people, budget: this.budget}, {animate: true, direction:'forward', animation:'ios-transition'});
  }

}
