import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultsPage } from '../results/results'
/*
  Generated class for the Date page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-date',
  templateUrl: 'date.html'
})
export class DatePage {

  constructor(public navCtrl: NavController) {}

  nextPage(){
  	this.navCtrl.push(ResultsPage, {}, {animate: true, direction:'forward', animation:'ios-transition'});
  }

}
