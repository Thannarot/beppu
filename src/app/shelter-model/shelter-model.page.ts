import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-shelter-model',
  templateUrl: './shelter-model.page.html',
  styleUrls: ['./shelter-model.page.scss'],
})
export class ShelterModelPage implements OnInit {
  @Input() data: any;
  constructor(private modelCtrl: ModalController) {}

  async closeShelterModel(){
    await this.modelCtrl.dismiss();
  }

  ngOnInit() {}

}
