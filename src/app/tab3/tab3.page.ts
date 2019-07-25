import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ShelterModelPage } from '../shelter-model/shelter-model.page';
import { TranslateConfigService } from '../translate-config.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.css']
})
export class Tab3Page {
  selectedLanguage:string;
  constructor(public modalCtrl: ModalController, private translateConfigService: TranslateConfigService){
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

 async presentModal() {
   const modal = await this.modalCtrl.create({
     component: ShelterModelPage,
     componentProps: {
       data: "Thannarot K."
     }
   });
   return await modal.present();
 }

}
