import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Teamplayerdetail2Page } from './teamplayerdetail2.page';

const routes: Routes = [
  {
    path: '',
    component: Teamplayerdetail2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Teamplayerdetail2Page]
})
export class Teamplayerdetail2PageModule {}
