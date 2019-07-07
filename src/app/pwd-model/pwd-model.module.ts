import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PwdModelPage } from './pwd-model.page';
import { MapinfoModelPageModule } from '../mapinfo-model/mapinfo-model.module';
@NgModule({
  imports: [
    MapinfoModelPageModule,
    CommonModule,
    IonicModule,
  ],
  declarations: [PwdModelPage],
  entryComponents: [PwdModelPage],
  exports: [PwdModelPage]
})
export class PwdModelPageModule {}
