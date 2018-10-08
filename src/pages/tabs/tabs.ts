import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditPage } from '../edit/edit';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  myPhoto : any;
  encPhoto : any;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }


  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(private camera: Camera, public navCtrl: NavController) {

  }

  takePhoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      this.myPhoto = 'data:image/jpeg;base64,' + imageData;
      this.navigeteEditPage(this.myPhoto);
    }, (err) => {
      console.log("カメラが立ち上がりません！");
    });
  }
  
  navigeteEditPage(photo) {
    this.navCtrl.push(EditPage, {
      myPhoto: photo
    });
  }
}
