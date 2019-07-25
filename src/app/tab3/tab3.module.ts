import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ShelterModelPageModule } from '../shelter-model/shelter-model.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    ShelterModelPageModule,
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page],
  entryComponents: []
})
export class Tab3PageModule {}
