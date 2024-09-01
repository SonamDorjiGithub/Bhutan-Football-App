import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FootballChangjijiPage } from './football-changjiji.page';

const routes: Routes = [
  {
    path: '',
    component: FootballChangjijiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FootballChangjijiPage]
})
export class FootballChangjijiPageModule {}
