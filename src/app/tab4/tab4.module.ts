import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { TrackingPageModule } from '../tracking/tracking.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    TrackingPageModule,
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    RouterModule.forChild([{ path: '', component: Tab4Page }])
  ],
  declarations: [Tab4Page],
  entryComponents: []
})
export class Tab4PageModule {}
