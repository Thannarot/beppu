import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-volunteer-info',
  templateUrl: './volunteer-info.page.html',
  styleUrls: ['./volunteer-info.page.scss'],
})
export class VolunteerInfoPage {

  constructor(private modalCtrl: ModalController) { }

  async closeInfoModel(){
    await this.modalCtrl.dismiss();
  }

}
