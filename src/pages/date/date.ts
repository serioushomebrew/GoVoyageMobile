import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultsPage } from '../results/results'
import { DatePicker } from 'ionic-native';


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

  constructor(public navCtrl: NavController) {
  	
  }

  nextPage(){
  	DatePicker.show({
	  date: new Date(),
	  mode: 'date',
	  androidTheme: 5
	}).then(
	  date => console.log('Got date: ', date),
	  err => console.log('Error occurred while getting date: ', err)
	);
  	//this.navCtrl.push(ResultsPage, {}, {animate: true, direction:'forward', animation:'ios-transition'});
  }

}
