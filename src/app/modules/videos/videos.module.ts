import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos/videos.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    VideosComponent
  ],
  imports: [
    CommonModule,
    VideosRoutingModule,
    RouterModule
  ],
  exports: [

  ]
})
export class VideosModule { }
