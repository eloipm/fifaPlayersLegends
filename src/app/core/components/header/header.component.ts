import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public languages = [
    {
      value: "en",
      alt: "English",
      flag: "./../../../assets/images/en-flag.png"
    },
    {
      value: "es",
      alt: "Español",
      flag: "./../../../assets/images/es-flag.png"
    }
  ];
  private translateService = inject(TranslateService);

  getLanguage(language:string){
    this.translateService.use(language);
  }


}
