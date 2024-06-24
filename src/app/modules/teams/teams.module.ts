import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams/teams.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CardTeamComponent } from './card-team/card-team.component';


@NgModule({
  declarations: [
    TeamsComponent,
    CardTeamComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    TeamsComponent,
    CardTeamComponent
  ]
})
export class TeamsModule { }
