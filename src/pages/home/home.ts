import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PopOverPage } from '../pop-over/pop-over'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('popoverContent', {read:ElementRef}) content:ElementRef;
  @ViewChild('popoverText', {read:ElementRef}) text: ElementRef;

  contentEle : any;
  textEle:any;

  constructor(
    public navCtrl: NavController,
    private popOverCtrl : PopoverController,
  )
  {}

  presentRangePopover(ev : UIEvent) {
    let popover = this.popOverCtrl.create(PopOverPage, {
      //contentEle : this.content.nativeElement,
      //textEle : this.text.nativeElement
    });
    popover.present({
      ev:ev
    });
  }

  rangeChange(ev) {
    /*
    let poppver = this.popOverCtrl.create(PopoverRangePage, {
      contentEle : this.content.nativeElement,
      textEle: this.text.nativeElement
    });
    */
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
