import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TrackingPage } from './tracking.page';
import { PwdToolkitPageModule } from '../pwd-toolkit/pwd-toolkit.module';

@NgModule({
  imports: [
    PwdToolkitPageModule,
    CommonModule,
    IonicModule
  ],
  declarations: [TrackingPage],
  entryComponents: [TrackingPage],
  exports: [TrackingPage]
})
export class TrackingPageModule {}
