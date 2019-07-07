import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PwdModelPage } from '../pwd-model/pwd-model.page';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public modelCtrl: ModalController) {}

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
