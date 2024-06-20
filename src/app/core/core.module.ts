import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { throwError } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslation } from './config/i18n/translate-loader.config';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot(provideTranslation())
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    TranslateModule
  ]
})
export class CoreModule { 
   constructor(@Optional() @SkipSelf() parentModule:CoreModule){
    if(parentModule){
      throw new Error("CoreModule is already loaded");
    }
   }
}
