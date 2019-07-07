import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapinfoModelPage } from '../mapinfo-model/mapinfo-model.page';
@Component({
  selector: 'app-pwd-model',
  templateUrl: './pwd-model.page.html',
  styleUrls: ['./pwd-model.page.scss'],
})
export class PwdModelPage {
  @Input() data: any;
  constructor(private modelCtrl: ModalController) {}

  async closePWDModel(){
    await this.modelCtrl.dismiss();
  }

  async showMapModal() {
    const modal = await this.modelCtrl.create({
      component: MapinfoModelPage,
      componentProps: {
        data: "Finn"
      }
    });
    return await modal.present();
  }
ngOnInit() {}

}
