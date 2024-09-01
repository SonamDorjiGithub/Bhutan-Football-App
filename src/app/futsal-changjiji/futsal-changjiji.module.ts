import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FutsalChangjijiPage } from './futsal-changjiji.page';

const routes: Routes = [
  {
    path: '',
    component: FutsalChangjijiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FutsalChangjijiPage]
})
export class FutsalChangjijiPageModule {}
