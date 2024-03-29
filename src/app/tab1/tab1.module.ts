import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ShelterModelPageModule } from '../shelter-model/shelter-model.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    IonicModule,
    ShelterModelPageModule,
    CommonModule,
    FormsModule,
    LeafletModule,
    HttpClientModule,
    TranslateModule.forChild(),
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
