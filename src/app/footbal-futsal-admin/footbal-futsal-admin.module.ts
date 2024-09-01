import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FootbalFutsalAdminPage } from './footbal-futsal-admin.page';

const routes: Routes = [
  {
    path: '',
    component: FootbalFutsalAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FootbalFutsalAdminPage]
})
export class FootbalFutsalAdminPageModule {}
