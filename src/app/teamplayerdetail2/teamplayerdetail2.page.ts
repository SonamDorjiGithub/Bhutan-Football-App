import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { AlertController, NavController, List, MenuController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teamplayerdetail2',
  templateUrl: './teamplayerdetail2.page.html',
  styleUrls: ['./teamplayerdetail2.page.scss'],
})
export class Teamplayerdetail2Page implements OnInit {
  matchTitle : any;
  matchVenue : any;
  matchTime : any;
  matchDate : any;
  matchTeam1 : any;
  matchTeam2 : any;
  matchScore : any;
  playerTeam1 : any;
  playerTeam2 : any;
  date : any;
  matchData:any[]=[];
  title:any;
  desc:any;
  match:any[]=[];
  matchList: Array<any[]>;
  teamName2: any;
  teamDetail2:any;
  matchtitle : string;
  teamLogo: string;
  splitData:string[]=[];
  timeoutStatus: any;
  constructor(private fs: AngularFirestore,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private iab: InAppBrowser,
    private menu:MenuController,
    public aroute: ActivatedRoute) 
    { 
      
      
      this.teamName2=this.aroute.snapshot.params['matchteam2'];
      this.matchtitle = this.aroute.snapshot.params['matchtitle'];
      this.fs.collection('/t_football_match').doc(`${this.matchtitle}`).get().subscribe(res=>
        {
          this.teamLogo=res.data().team2logo;
        })
        this.timeoutStatus = setTimeout(() => {
          console.log("value="+this.teamLogo);      
          if(this.teamLogo == undefined){
            console.log("No Internet Connection");
            //this.loadingController.dismiss();      
            this.navCtrl.navigateForward('/internetstatus');
          }      
      }, 7500);  
      this.teamDetail2=this.aroute.snapshot.params['playerteam2'];
      this.splitData=this.teamDetail2.split(',');
      console.log(this.teamDetail2);
    }

  ngOnInit() {
  }
  openMenu()
  {
    this.menu.toggle('myMenu');
  }
}
