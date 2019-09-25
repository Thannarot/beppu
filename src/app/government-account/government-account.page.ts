import { Component } from '@angular/core';
import { TranslateConfigService } from '../translate-config.service';
@Component({
  selector: 'app-government-account',
  templateUrl: './government-account.page.html',
  styleUrls: ['./government-account.page.scss'],
})
export class GovernmentAccountPage {
    selectedLanguage:string;
    constructor(private translateConfigService: TranslateConfigService){
      this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    }
    languageChanged(){
      this.translateConfigService.setLanguage(this.selectedLanguage);
    }

}
