import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeamplayerdetailPage } from './teamplayerdetail.page';

const routes: Routes = [
  {
    path: '',
    component: TeamplayerdetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeamplayerdetailPage]
})
export class TeamplayerdetailPageModule {}
