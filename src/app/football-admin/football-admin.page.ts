import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-football-admin',
  templateUrl: './football-admin.page.html',
  styleUrls: ['./football-admin.page.scss'],
})
export class FootballAdminPage implements OnInit {

  showGround_var: boolean = false;
  constructor(
    private navCtl : NavController,
    private menu: MenuController
  ) { }

  ngOnInit() {
  }

  openMenu(){
    this.menu.toggle('myMenu');
  }

  updateStatus(){
    if(this.showGround_var == false){
      this.showGround_var = true;
    }
    else{
      this.showGround_var = false;
    }
  }

  goAdminFullGround(){
    this.navCtl.navigateForward('/footbalFullAdmin');
  }

  goAdminFutsal(){
    this.navCtl.navigateForward('/footbalFutsalAdmin');    
  }
  goManTourn()
  {
    this.navCtl.navigateForward('/managetourn');
  }
  viewGround(){
    this.navCtl.navigateForward('/football');    
  }
}
