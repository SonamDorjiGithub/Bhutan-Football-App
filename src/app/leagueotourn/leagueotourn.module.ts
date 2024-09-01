import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeagueotournPage } from './leagueotourn.page';

const routes: Routes = [
  {
    path: '',
    component: LeagueotournPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeagueotournPage]
})
export class LeagueotournPageModule {}
