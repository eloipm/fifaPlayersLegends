import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './components/videos/videos.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
