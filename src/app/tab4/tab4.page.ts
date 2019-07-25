import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TrackingPage } from '../tracking/tracking.page';
import { TranslateConfigService } from '../translate-config.service';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  selectedLanguage:string;
  constructor(public modalCtrl: ModalController, private translateConfigService: TranslateConfigService){
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

 async presentModal() {
   const modal = await this.modalCtrl.create({
     component: TrackingPage,
     componentProps: {
       data: "Thannarot K."
     }
   });
   return await modal.present();
 }


}
