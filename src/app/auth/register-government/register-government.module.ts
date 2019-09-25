import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterGovernmentPage } from './register-government.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterGovernmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterGovernmentPage]
})
export class RegisterGovernmentPageModule {}
