import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

/*
  Generated class for the Results page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage {
	data: any;
  constructor(public navCtrl: NavController, public http: Http) {

  		this.data = {};
        this.data.username = '';
        this.data.response = '';

		var base ='https://govoyage.nl/api/searchflights';
		
		var postdata = {
			start : '10-12-2016',
			end : '28-12-2016',
			budget : '600',
			passengers : '2',
			temperature : '15',
		}
		
		this.http.post(base, postdata)
	        .subscribe(data => {
	            console.log(data);
	            console.log(typeof data);
	            
	        }, error => {
	            console.log(JSON.stringify(error.json()));
	        });
	  }

  ionViewDidLoad() {
	
  }	    


}
