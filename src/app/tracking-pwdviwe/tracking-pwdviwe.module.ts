import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { PwdToolkitPageModule } from '../pwd-toolkit/pwd-toolkit.module';
import { TranslateModule } from '@ngx-translate/core';
import { TrackingPwdviwePage } from './tracking-pwdviwe.page';

@NgModule({
  imports: [
    PwdToolkitPageModule,
    CommonModule,
    IonicModule,
    LeafletModule,
    HttpClientModule,
    TranslateModule.forChild(),
    RouterModule.forChild([{ path: '', component: TrackingPwdviwePage }])
  ],
  declarations: [TrackingPwdviwePage]
})
export class TrackingPwdviwePageModule {}
