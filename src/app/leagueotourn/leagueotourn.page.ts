import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController, MenuController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-leagueotourn',
  templateUrl: './leagueotourn.page.html',
  styleUrls: ['./leagueotourn.page.scss'],
})
export class LeagueotournPage implements OnInit {
  league:any[]=[];
  constructor(
    public afs: AngularFirestore,
    public navCtrl: NavController,
    public menu: MenuController,
    public loadingController: LoadingController,

  ) {
    this.presentLoading();
    this.afs.collection('/leagueotourn',ref=>ref.orderBy('createdAt', 'desc')).get().subscribe(res=>
      {
        res.forEach((doc:any)=>
      {
        this.league.push({
          tname:doc.data().tname,
          startdate :doc.data().startdate,
          enddate : doc.data().enddate,
          url: doc.data().url
        })
        if(this.league){
          console.log("up");
          this.loadingController.dismiss();      
        }
        // this.movieList.push(this.movie);
      });
      })
      console.log(this.league);
   }

  ngOnInit() {
  }

  ionViewDidLeave(){
    this.loadingController.dismiss();          
  }
  
  goTourn(tname:any,url:any)
  {
    this.navCtrl.navigateForward('/ttable/'+tname)
  }

  openMenu()
  {
    this.menu.toggle('myMenu');
  }

  goBack()
  {
    this.navCtrl.navigateForward('/home');
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
