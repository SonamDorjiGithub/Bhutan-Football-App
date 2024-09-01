import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-managetourn',
  templateUrl: './managetourn.page.html',
  styleUrls: ['./managetourn.page.scss'],
})
export class ManagetournPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public menu: MenuController
  ) { }

  ngOnInit() {
  }

  goNewTourn()
  {
    this.navCtrl.navigateForward('/newtourn');
  }

  goEditTourn()
  {
    this.navCtrl.navigateForward('/leagueotourn');
  }

  goBack()
  {
    this.navCtrl.navigateForward('/footballAdmin');
  }

  openMenu()
  {
    this.menu.toggle('myMenu');
  }
}
