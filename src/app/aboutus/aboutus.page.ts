import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {
  showaboutapp : boolean = false;
  showdeveloper : boolean = false;
  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
  aboutApp()
  {
    
    this.showaboutapp = true;
    this.showdeveloper = false;
  }

  postDeveloper(){
    this.showaboutapp = false;
    this.showdeveloper = true;
  }
  }

