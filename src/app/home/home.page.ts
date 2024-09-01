import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public menu: MenuController,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  openMenu()
  {
    this.menu.toggle('myMenu');
  }

  goGroundStat()
  {
    this.navCtrl.navigateForward('/football');
  }

  goTable()
  {
    this.navCtrl.navigateForward('/leagueotourn');
  }

  goEvents()
  {
    this.navCtrl.navigateForward('/upcomingevents');
  }

  goMatches(){
    this.navCtrl.navigateForward('/match');
  }
}
