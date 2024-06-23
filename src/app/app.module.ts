import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './modules/home/home.module';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslation } from './core/config/i18n/translate-loader.config';
import { VideosModule } from './modules/videos/videos.module';
import { PlayersComponent } from './modules/players/components/players/players.component';
import { TeamsComponent } from './modules/teams/teams/teams.component';

import { CardTeamComponent } from './modules/teams/card-team/card-team.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    TeamsComponent,
    CardTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    HomeModule,
    VideosModule,
    TranslateModule.forRoot(provideTranslation())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
