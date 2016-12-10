import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController) {}

  nextPage(){
  	this.navCtrl.push(BudgetPage, {}, {animate: true, direction:'forward', animation:'ios-transition'});
  }

}
