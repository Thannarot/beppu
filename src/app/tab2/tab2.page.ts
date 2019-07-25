import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PwdModelPage } from '../pwd-model/pwd-model.page';
import { TranslateConfigService } from '../translate-config.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  selectedLanguage:string;
  constructor(public modelCtrl: ModalController, private translateConfigService: TranslateConfigService){
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

 async presentModal() {
   const modal = await this.modelCtrl.create({
     component: PwdModelPage,
     componentProps: {
       data: "Finn"
     }
   });
   return await modal.present();
 }

}
