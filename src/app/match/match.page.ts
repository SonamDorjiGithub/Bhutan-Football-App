import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, List, MenuController, LoadingController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {

  matchTitle : any;
  matchVenue : any;
  matchTime : any;
  matchDate : any;
  matchTeam1 : any;
  matchTeam2 : any;
  matchScore : any;

  matchSummary: any;

  date : any;
  matchData:any[]=[];
  title:any;
  desc:any;
  match:any[]=[];
  matchList: Array<any[]>;

  timeoutStatus: any;
 
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
    this.presentLoading();
    this.fs.collection('/t_football_match',ref=>ref.orderBy('matchno', 'asc')).get().subscribe(res=>
      {
        res.forEach((doc:any)=>
      {
        this.match.push({
          matchtitle : doc.data().matchtitle,
          matchteam1 : doc.data().matchteam1,
          playerteam1: doc.data().playerteam1,
          matchteam2 : doc.data().matchteam2,
          playerteam2: doc.data().playerteam2,
          matchsore : doc.data().matchsore,
          matchvenue : doc.data().matchvenue,
          matchtime : doc.data().matchtime,
          matchdate : doc.data().matchdate,
          team1logo: doc.data().team1logo,
          team2logo: doc.data().team2logo,
          leaguename: doc.data().leaguename,
          matchstat: doc.data().matchstat,
          matchSummary: doc.data().matchSummary,
          sponsorlogo1: doc.data().sponsorlogo1,
          sponsorlogo2: doc.data().sponsorlogo2,
          sponsorlogo3: doc.data().sponsorlogo3,
          sponsor1url: doc.data().sponsor1url,
          sponsor2url: doc.data().sponsor2url,
          sponsor3url: doc.data().sponsor3url,
          
        })
        this.matchTitle = doc.data().matchtitle;
        if(this.match){
          console.log("up");
          this.loadingController.dismiss();      
        }
        // this.movieList.push(this.movie);
       // console.log("match data:"+this.match);
       
      });
      })
      this.timeoutStatus = setTimeout(() => {
        console.log("value="+this.matchTitle);      
        if(this.matchTitle == undefined){
          console.log("No Internet Connection");
          //this.loadingController.dismiss();      
          this.navCtrl.navigateForward('/internetstatus');
        }      
    }, 7500);
      
   }
   ionViewWillLeave(){
    console.log("Leave view");
    clearTimeout(this.timeoutStatus);
  }

  ionViewDidLeave(){
    this.loadingController.dismiss();          
  }

  ngOnInit() {
  }

  openMenu(){
    this.menu.toggle('myMenu');
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
     // message: 'Hellooo',
      duration: 8000,
      spinner: 'crescent',
      cssClass: 'loaderClass'
    });
    return await loading.present();
  }

  showChangFootball(){
    this.navCtrl.navigateForward('/football-changlimithang');
  }

  showChangFutsal(){
    this.navCtrl.navigateForward('/futsal-changlimithang');
  }
  
  showYDF(){
    this.navCtrl.navigateForward('/football-ydf');
  }

  showSerbithang(){
    this.navCtrl.navigateForward('/football-serbithang');    
  }
  showChangjijiFull(){
    this.navCtrl.navigateForward('/football-changjiji');    
  }
  showChangjijiFutsal(){
    this.navCtrl.navigateForward('/futsal-changjiji');    
  }
  showBabesa(){
    this.navCtrl.navigateForward('/football-babesa');    
  }
  viewPlayerTeam(team1 : any,players1:any,matchTitle:any){
    console.log("players="+players1);
    this.navCtrl.navigateForward('/teamplayerdetail/'+team1+'/'+players1+'/'+matchTitle);
  }
  viewPlayerTeam2(team2 : any,players2 : any, matchTitle:any){
    console.log("players="+players2);
    this.navCtrl.navigateForward('/teamplayerdetail2/'+team2+'/'+players2+'/'+matchTitle);
  }

  openSponsor(url: any)
  {
    const browser = this.iab.create(url);
  }

  myCujoo()
  {
    const browser = this.iab.create('https://mycujoo.tv/video/bhutan-football');
  }
}
