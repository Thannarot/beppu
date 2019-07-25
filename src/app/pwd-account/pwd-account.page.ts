import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../translate-config.service';
@Component({
  selector: 'app-pwd-account',
  templateUrl: './pwd-account.page.html',
  styleUrls: ['./pwd-account.page.scss'],
})
export class PwdAccountPage {

  selectedLanguage:string;
  constructor(private translateConfigService: TranslateConfigService){
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

}
