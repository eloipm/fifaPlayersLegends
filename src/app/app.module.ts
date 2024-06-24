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
import { IPlayerService } from './services/player.service.interface';
import { PlayerService } from './services/player.service';
import { TeamsModule } from './modules/teams/teams.module';
import { PlayersModule } from './modules/players/players.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    HomeModule,
    PlayersModule,
    VideosModule,
    TeamsModule,
    TranslateModule.forRoot(provideTranslation())
  ],
  providers: [{provide: IPlayerService, useClass: PlayerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
