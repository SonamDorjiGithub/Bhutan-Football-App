import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MenuController, LoadingController } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-upcomingevents',
  templateUrl: './upcomingevents.page.html',
  styleUrls: ['./upcomingevents.page.scss'],
})
export class UpcomingeventsPage implements OnInit {
events: any[]=[];
  constructor(
    public afs: AngularFirestore,
    public menu: MenuController,
    public loadingController: LoadingController,
    public photoViewer: PhotoViewer
  ) { 
    this.presentLoading();
    this.afs.collection('/events',ref=>ref.orderBy('createdAt', 'desc')).get().subscribe(res=>
      {
        res.forEach((doc:any)=>
      {
        this.events.push({
          url:doc.data().url
        })
        if(this.events){
          console.log("up");
          this.loadingController.dismiss();      
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

  openMenu()
  {
    this.menu.toggle('myMenu');
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

  viewEventPhoto(imageLink: any){
    // this.photoViewer.show(productLink, name, {share: true});
    this.photoViewer.show(imageLink);
  }
}
