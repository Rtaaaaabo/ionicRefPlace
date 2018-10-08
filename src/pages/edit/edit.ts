import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  myPhoto : any;
  options : CameraOptions = {
    quality :50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType : this.camera.EncodingType.JPEG,
    mediaType : this.camera.MediaType.PICTURE
  }

  constructor(
    private camera: Camera,
    public navCtrl: NavController,
    public navParams: NavParams,
  )
  {
  }

  ngOnInit(){
    this.camera.getPicture(this.options).then((imageData) => {
      this.myPhoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log("エラー:", err);
    });
  }

  ionViewDidEnter() {
    console.log("ここには入ってこない？");
  }

}
