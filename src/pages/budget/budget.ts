import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePage } from '../date/date';

@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html'
})
export class BudgetPage {

  constructor(public navCtrl: NavController) {
  	
  }

  nextPage(){
  	this.navCtrl.push(DatePage, {}, {animate: true, direction:'forward', animation:'ios-transition'});
  }

}
