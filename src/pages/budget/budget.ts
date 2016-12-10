import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Budget page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html'
})
export class BudgetPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BudgetPage Page');
  }

}
