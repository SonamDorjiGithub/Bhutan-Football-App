import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FootbalFullAdminPage } from './footbal-full-admin.page';

const routes: Routes = [
  {
    path: '',
    component: FootbalFullAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FootbalFullAdminPage]
})
export class FootbalFullAdminPageModule {}
