import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-pop-over',
  template: `
    <button ion-button round>
      <ion-icon name="add"></ion-icon>
    </button>
    <button ion-button round>
      <ion-icon name="ios-remove"></ion-icon>
    </button> 
  `
    
/*
  template: `
    <ion-list>
      <ion-list-header>
        半径(メートル)
      </ion-list-header>
      <ion-item>
        <ion-range min="1000" max="3000" step="1000">
          <ion-label range-left>500</ion-label>
          <ion-label range-right>3000</ion-label>
        </ion-range>
      </ion-item>
    </ion-list>
  `,
  */
})
export class PopOverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopOverPage');
  }

}
