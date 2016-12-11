import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from '../results/results';
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
	dateToInput:any;
	dateFromInput:any;	
	temp: any;
	people: any;
	budget: any;
	dateFromValue: any;
	dateToValue: any;
  constructor(public navCtrl: NavController, public navParams : NavParams) {
  	this.dateFromInput = 'Zo, 11 Dec,2016';
  	this.dateToInput = 'Za, 17 Dec, 2016';
  	this.dateFromValue = '11-12-2016';
  	this.dateToValue = '17-12-2016';
  	this.temp = navParams.get('temp');
	this.people = navParams.get('people');
	this.budget = navParams.get('budget');
  }

  dateTo(event: Event){
  	event.preventDefault();

  	DatePicker.show({
	  date: new Date(),  
	  mode: 'date',
	  androidTheme: 5
	}).then(date => {
		// di 13 dec. 2016
		console.log(typeof date);
	  	console.log(date.toLocaleDateString('nl-NL', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })); // Wed Dec 14 2016	  	
	  	var splitter = date.toLocaleDateString('nl-NL', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }); // Wed Dec 14 2016	  	

	  	var boom = splitter.split(' ');
	  	var day = this.ucfirst(boom[0]);
	  	var month = this.ucfirst(boom[2].slice(0,-1));
	  	var dat = this.ucfirst(boom[1]);
	  	var year = this.ucfirst(boom[3]);
	  	var dateMonth = date.getMonth() + 1;

  		this.dateToInput = day+', '+dat+' '+month+', '+year;
  		this.dateFromValue = date.getDate()+'-'+dateMonth+'-'+date.getFullYear();

	  },
	  err => console.log('Error occurred while getting date: ', err)
	);
  }

  dateFrom(event: Event){
  	event.preventDefault();

  	DatePicker.show({
	  date: new Date(),  
	  mode: 'date',
	  androidTheme: 5
	}).then(date => {
		// di 13 dec. 2016
		console.log(typeof date);
	  	console.log(date.toLocaleDateString('nl-NL', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })); // Wed Dec 14 2016	  	
	  	var splitter = date.toLocaleDateString('nl-NL', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }); // Wed Dec 14 2016	  	

	  	var boom = splitter.split(' ');
	  	console.log(boom);
	  	var day = this.ucfirst(boom[0]);
	  	var month = this.ucfirst(boom[2].slice(0,-1));
	  	var dat = this.ucfirst(boom[1]);
	  	var year = this.ucfirst(boom[3]);
	  	var dateMonth = date.getMonth() + 1;
  		this.dateFromInput = day+', '+dat+' '+month+', '+year;
  		this.dateFromValue = date.getDate()+'-'+dateMonth+'-'+date.getFullYear();
	  },
	  err => console.log('Error occurred while getting date: ', err)
	);
  }

  ucfirst(str) {
    var firstLetter = str.substr(0, 1);
    return firstLetter.toUpperCase() + str.substr(1);
}

  nextPage(){
  	this.navCtrl.push(ResultsPage, {
  		temp: this.temp,
  		people: this.people,
  		budget: this.budget,
  		dateFrom : this.dateFromValue,
  		dateTo : this.dateToValue
  	}, {animate: true, direction:'forward', animation:'ios-transition'});
  }

}
