import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FootballChanglimithangPage } from './football-changlimithang.page';

const routes: Routes = [
  {
    path: '',
    component: FootballChanglimithangPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FootballChanglimithangPage]
})
export class FootballChanglimithangPageModule {}
