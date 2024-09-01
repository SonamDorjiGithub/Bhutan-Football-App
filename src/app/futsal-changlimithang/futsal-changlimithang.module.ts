import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FutsalChanglimithangPage } from './futsal-changlimithang.page';

const routes: Routes = [
  {
    path: '',
    component: FutsalChanglimithangPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FutsalChanglimithangPage]
})
export class FutsalChanglimithangPageModule {}
