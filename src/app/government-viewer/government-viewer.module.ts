import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule } from '@angular/forms';
import { GovernmentViewerPage } from './government-viewer.page';
import { PwdModelPageModule } from '../pwd-model/pwd-model.module';
import { ShelterModelPageModule } from '../shelter-model/shelter-model.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    PwdModelPageModule,
    ShelterModelPageModule,
    IonicModule,
    CommonModule,
    FormsModule,
    LeafletModule,
    HttpClientModule,
    TranslateModule.forChild(),
    RouterModule.forChild([{ path: '', component: GovernmentViewerPage }])
  ],
  declarations: [GovernmentViewerPage]
})
export class GovernmentViewerPageModule {}
