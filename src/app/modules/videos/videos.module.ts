import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosComponent } from './videos/videos.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    VideosComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports: [

  ]
})
export class VideosModule { }
