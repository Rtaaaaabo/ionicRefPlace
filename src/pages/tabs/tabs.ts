import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditPage } from '../edit/edit';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

//import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(
    public navCtrl: NavController,
  ) {
  }
  
  navigateEditPage() {
   this.navCtrl.push(EditPage);
 }
}
