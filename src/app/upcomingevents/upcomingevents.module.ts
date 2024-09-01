import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpcomingeventsPage } from './upcomingevents.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingeventsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpcomingeventsPage]
})
export class UpcomingeventsPageModule {}
