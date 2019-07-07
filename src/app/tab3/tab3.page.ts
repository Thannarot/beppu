import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ShelterModelPage } from '../shelter-model/shelter-model.page';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.css']
})
export class Tab3Page {

  constructor(public modalCtrl: ModalController) {}

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
