import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersComponent } from './components/players/players.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PlayersComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ]
})
export class PlayersModule { }
