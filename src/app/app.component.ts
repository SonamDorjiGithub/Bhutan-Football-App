import { Component } from '@angular/core';

import { Platform, MenuController, NavController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu:MenuController,
    private navCtrl: NavController,
    private iab: InAppBrowser,
    private alertCtrl: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }
  goAdminLogin(){
    this.navCtrl.navigateForward('/admin');
    this.menu.toggle('myMenu');
   
  }

  async alertAdminLogin()
  {
    //console.log("in alert share="+vehicleNo,custName,consignment,custMac,driverMac);

    const alert=await this.alertCtrl.create({
      header:'Admin Login',
      inputs:[
        {
          type:'text',
          name:'customer_cont',
          placeholder:'Admin User '
        },
        {
          type:'password',
          name:'customer_cont',
          placeholder:'Password '
        },
      ],
      buttons:[
        {
          text:'Login',
          handler:(data)=>
          {
            this.goAdminLogin();
          }
        }
      ]
    });
    alert.present();
  }

  goContact(){
    this.menu.toggle('myMenu');
   this.navCtrl.navigateForward('/contact');
  }
  goAboutUs(){
    this.menu.toggle('myMenu');
   this.navCtrl.navigateForward('/aboutus');
  }

  goRateus(){
    const browser = this.iab.create('https://play.google.com/store/apps/details?id=org.bhutanfootball.www');
  }
  goHelp(){
    this.menu.toggle('myMenu');
   this.navCtrl.navigateForward('/help');
  }
  goHome(){
    this.menu.toggle('myMenu');
   this.navCtrl.navigateForward('/home');
  }
}
