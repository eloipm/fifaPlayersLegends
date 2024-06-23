import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams/teams.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    TeamsComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ]
})
export class TeamsModule { }
