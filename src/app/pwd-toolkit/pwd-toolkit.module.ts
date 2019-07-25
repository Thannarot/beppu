import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PwdToolkitPage } from './pwd-toolkit.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [PwdToolkitPage],
  entryComponents: [PwdToolkitPage],
  exports: [PwdToolkitPage]
})
export class PwdToolkitPageModule {}
