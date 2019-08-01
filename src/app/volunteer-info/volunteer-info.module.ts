import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { VolunteerInfoPage } from './volunteer-info.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [VolunteerInfoPage],
  entryComponents: [VolunteerInfoPage],
  exports: [VolunteerInfoPage]
})
export class VolunteerInfoPageModule {}
