import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Event } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ttable',
  templateUrl: './ttable.page.html',
  styleUrls: ['./ttable.page.scss'],
})
export class TtablePage implements OnInit {
  tname: any;
  teams:any[]=[];
  url: any;

  showImage: boolean = false;

  constructor(
    public aroute: ActivatedRoute,
    public afs: AngularFirestore,
    public navCtrl: NavController,
    public router: Router,
    private iab: InAppBrowser,
    public loadingController: LoadingController,
    public menu: MenuController
  ) 
  { 
    this.tname=this.aroute.snapshot.params['tname'];
    console.log('url is='+this.url);
    router.events.subscribe((event:Event) => {
      if (event instanceof NavigationEnd) {
          // When the route is '/', location.path actually returns ''.
        this.loadData();
  }
  });
   this.loadSponsor();
  }

  loadData()
  {
    this.teams=[];
    this.presentLoading();
    this.afs.collection('/leagueotourn').doc(`${this.tname}`).collection('/teams',ref=>ref.orderBy('pos','asc')).get().subscribe(res=>
      {
        res.forEach((doc:any)=>
      {
        this.teams.push({
          teamname:doc.data().teamname,
          p:doc.data().p,
          w:doc.data().w,
          l:doc.data().l,
          d:doc.data().d,
          gd:doc.data().gd,
          pts:doc.data().pts,
          url:doc.data().url,
          pos:doc.data().pos
        })
        if(this.teams){
          console.log("up");
          this.loadingController.dismiss();  
          this.showImage = true;    
        }
        // this.movieList.push(this.movie);
      });
      })

  }

  ngOnInit() {
  }
  
  ionViewDidLeave(){
    this.loadingController.dismiss();          
  }
  
  editTeam(teamname:any,p:any,w:any,l:any,d:any,gd:any,pts:any,pos:any)
  {
    this.navCtrl.navigateForward('/editteam/'+this.tname+'/'+teamname+'/'+p+'/'+w+'/'+l+'/'+d+'/'+gd+'/'+pts+'/'+pos)
  }

  sponsorData:any[]=[];

  sponlogo1: any;
  sponlogo2: any;
  sponlogo3: any;
  sponlogo4: any;
  sponlogo5: any;
  sponlogo6: any;
  sponlogo7: any;
  sponlogo8: any;
  sponlogo9: any;
  sponurl1: any;
  sponurl2: any;
  sponurl3: any;
  sponurl4: any;
  sponurl5: any;
  sponurl6: any;
  sponurl7: any;
  sponurl8: any;
  sponurl9: any;

  loadSponsor(){
      this.afs.collection('/leagueotourn').doc('sponsor').get().subscribe(res=>  
        {
          this.sponlogo1 = res.data().sponlogo1;
          this.sponlogo2 = res.data().sponlogo2;
          this.sponlogo3 = res.data().sponlogo3;
          this.sponlogo4 = res.data().sponlogo4;
          this.sponlogo5 = res.data().sponlogo5;
          this.sponlogo6 = res.data().sponlogo6;
          this.sponlogo7 = res.data().sponlogo7;
          this.sponlogo8 = res.data().sponlogo8;
          this.sponlogo9 = res.data().sponlogo9;  
          this.sponurl1 = res.data().sponurl1;  
          this.sponurl2 = res.data().sponurl2;  
          this.sponurl3 = res.data().sponurl3;  
          this.sponurl4 = res.data().sponurl4;  
          this.sponurl5 = res.data().sponurl5;  
          this.sponurl6 = res.data().sponurl6;  
          this.sponurl7 = res.data().sponurl7;  
          this.sponurl8 = res.data().sponurl8;  
          this.sponurl9 = res.data().sponurl9;  
        })
        console.log("logo1: "+this.sponlogo1);
  }

  openSponsor(url: any)
  {
    const browser = this.iab.create(url);
  }

  openMenu()
  {
    console.log('reached here');
    this.menu.toggle('myMenu');
  }

  goBack()
  {
    this.navCtrl.navigateForward('/leagueotourn');
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
     // message: 'Hellooo',
      duration: 7000,
      spinner: 'crescent',
      cssClass: 'loaderClass'
    });
    return await loading.present();
  }
}
