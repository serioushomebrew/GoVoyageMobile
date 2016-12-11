import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';

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
    posts: any;
    temp: any;
    people: any;
    budget: any;
    dateFrom: any;
    dateTo: any;
  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {

      this.temp = navParams.get('temp');     
      this.dateFrom = navParams.get('dateFrom');
      this.dateTo = navParams.get('dateTo');      
      this.people = navParams.get('people');
      this.budget = navParams.get('budget');

      console.log('searching where '+this.temp+' degrees, for '+this.people+' people, budget is '+this.budget);
      console.log('from '+this.dateFrom+' to '+this.dateTo);

        var base ='https://govoyage.nl/api/searchflights';

        var postdata = {
            start : this.dateFrom,
            budget : this.budget.replace(',','.'),
            passengers : this.people,
            temperature : this.temp,
        };

    this.http.post(base, postdata).map((res: Response) => res.json())
    .subscribe(xdata => {
      console.log('TEST 1', xdata);
      // let json = JSON.parse(xdata);



      this.posts = xdata.sort(this.compare);
      console.log(this.posts);
      
    }, error => {
      console.log('TEST 2', error);
    });

  }

  compare(a,b) {
  if (a.pricing.price < b.pricing.price)
    return -1;
  if (a.pricing.price > b.pricing.price)
    return 1;
  return 0;
}


}