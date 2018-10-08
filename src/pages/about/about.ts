import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  /*
  options: CameraOptions = {
    quality : 100,
    destinationType:this.camera.DestinationType.DATA_URL,
    encodingType:this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  */
  myPhoto:any;
  safeImage:any;
  safeImage_enc:any;

  constructor(
    public navCtrl: NavController,
//    private camera : Camera,
  )
  {
  }

  takePhotos() {
    /*
    this.camera.getPicture(this.options).then((imageData) => {
      this.myPhoto = 'data:image/jpeg;base64,' +imageData;
    }, (err) => {
      console.log("カメラが立ち上がりません！");
    });
  */
  }

}
