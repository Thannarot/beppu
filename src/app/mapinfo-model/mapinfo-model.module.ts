import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { IonicModule } from '@ionic/angular';
import { MapinfoModelPage } from './mapinfo-model.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LeafletModule,
    HttpClientModule
  ],
  declarations: [MapinfoModelPage],
  entryComponents: [MapinfoModelPage],
  exports: [MapinfoModelPage]
})
export class MapinfoModelPageModule {}
