import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { AlertController, NavController, List, MenuController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-teamplayerdetail',
  templateUrl: './teamplayerdetail.page.html',
  styleUrls: ['./teamplayerdetail.page.scss'],
})
export class TeamplayerdetailPage implements OnInit {
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
  splitData:string[]=[];
  players:any[]=[];
  matchList: Array<any[]>;
  teamName1: any;
  teamDetail1:string;
  matchtitle : string;
  teamLogourl2 : string;
  teamLogo: string;
  timeoutStatus: any;
  constructor(private fs: AngularFirestore,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private iab: InAppBrowser,
    private menu:MenuController,
    public aroute: ActivatedRoute
    )
    {
      this.teamName1=this.aroute.snapshot.params['matchteam1'];
      this.matchtitle = this.aroute.snapshot.params['matchtitle'];
      this.fs.collection('/t_football_match').doc(`${this.matchtitle}`).get().subscribe(res=>
        {
          this.teamLogo=res.data().team1logo;
        })
        this.timeoutStatus = setTimeout(() => {
          console.log("value="+this.teamLogo);      
          if(this.teamLogo == undefined){
            console.log("No Internet Connection");
            //this.loadingController.dismiss();      
            this.navCtrl.navigateForward('/internetstatus');
          }      
      }, 7500);  
      this.teamDetail1=this.aroute.snapshot.params['playerteam1'];
      this.splitData=this.teamDetail1.split(',');
      // console.log("data eg:"+this.splitData[1]);
      // console.log("teamname1: "+this.teamName1);
      // console.log("teamdetail: "+this.teamDetail1);
     
      console.log("teamlogourl2: "+this.teamLogourl2);

   
    }

  ngOnInit() {
  }

  openMenu()
  {
    this.menu.toggle('myMenu');
  }
}
