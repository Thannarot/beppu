import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-pwd-toolkit',
  templateUrl: './pwd-toolkit.page.html',
  styleUrls: ['./pwd-toolkit.page.scss'],
})
export class PwdToolkitPage {

  constructor(private modalCtrl: ModalController) { }

  async closeToolkitModel(){
    await this.modalCtrl.dismiss();
  }

}
