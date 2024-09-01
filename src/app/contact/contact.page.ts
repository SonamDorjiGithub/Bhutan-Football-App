import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private menu: MenuController) {
  }

  ngOnInit() {
  }

  openMenu(){
    this.menu.toggle('myMenu');
  }

}
