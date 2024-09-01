import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { AlertController, NavController, List, MenuController, LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-football',
  templateUrl: './football.page.html',
  styleUrls: ['./football.page.scss'],
})
export class FootballPage implements OnInit {
  matchTitle : any;
  matchVenue : any;
  matchTime : any;
  matchDate : any;
  matchTeam1 : any;
  matchTeam2 : any;
  matchScore : any;
  date : any;
  matchData:any[]=[];
  title:any;
  desc:any;
  match:any[]=[];
  matchList: Array<any[]>;
  constructor
  (
    private fs: AngularFirestore,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private iab: InAppBrowser,
    private menu:MenuController,
    public loadingController: LoadingController,
  ) 
  {
      
   }

  ngOnInit() {
  }

  ionViewDidLeave(){
    this.loadingController.dismiss();          
  }

  openMenu(){
    this.menu.toggle('myMenu');
  }

  showChangFootball(){
    this.presentLoading();
    this.navCtrl.navigateForward('/football-changlimithang');
  }

  showChangFutsal(){
    this.presentLoading();
    this.navCtrl.navigateForward('/futsal-changlimithang');
  }

  showChangjijiFootball(){
    this.presentLoading();
    this.navCtrl.navigateForward('/football-changjiji');
  }

  showChangjijiFutsal(){
    this.presentLoading();
    this.navCtrl.navigateForward('/futsal-changjiji');    
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
     // message: 'Hellooo',
      duration: 15000,
      spinner: 'crescent',
      cssClass: 'loaderClass'
    });
    return await loading.present();
  }
}
