import { Injectable, inject } from '@angular/core';
import { IPlayerService } from './player.service.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IPlayer } from '../models/player.model';
import { HomeComponent } from '../modules/home/home/home.component';


@Injectable({
  providedIn: HomeComponent
})

export class PlayerService implements IPlayerService {

  private playersUrl = 'assets/data/players.json';
  private http = inject(HttpClient);

  getPlayers(): Observable<IPlayer[]> {
    return this.http.get<{playersLegends: IPlayer[] }>(this.playersUrl).pipe(map(players => players.playersLegends));
  }

  getPlayerById(id: number): Observable<IPlayer> {
    return this.http.get<IPlayer[]>(this.playersUrl).pipe(
      map(players => players.find(player => player.pId === id)!)
    );
  }

}
