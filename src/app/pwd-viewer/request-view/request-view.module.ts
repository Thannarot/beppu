import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule } from '@angular/forms';
import { RequestViewPage } from './request-view.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LeafletModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: RequestViewPage }])
  ],
  declarations: [RequestViewPage]
})
export class RequestViewPageModule {}
