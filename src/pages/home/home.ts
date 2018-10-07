import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  rangeChange() {
    // ここではPopOverを入れるつもり
    console.log("Change Range");
  }
  
  // Google Map APIを使用してMapを表示させるか
  // それともApple Mapかな！？
  displayMap() {
    // ページ遷移をする
    console.log("Google Mapを表示させる");
  }

  sendLike() {
    console.log("いいね！ボタンのクリック");
  }

  sendComment() {
    console.log("コメントを送る");
  }

}
