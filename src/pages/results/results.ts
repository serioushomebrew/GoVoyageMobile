import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public http: Http) {
      

        var base ='https://govoyage.nl/api/searchflights';

        var postdata = {
            start : '01-01-2017',
            budget : '300',
            passengers : '1',
            temperature : 15,
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