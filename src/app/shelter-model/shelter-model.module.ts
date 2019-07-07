import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ShelterModelPage } from './shelter-model.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [ShelterModelPage],
  entryComponents: [ShelterModelPage],
  exports: [ShelterModelPage]
})
export class ShelterModelPageModule {}
