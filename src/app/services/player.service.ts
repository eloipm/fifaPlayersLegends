import { Injectable, inject } from '@angular/core';
import { IPlayerService } from './player.service.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IPlayer } from '../models/player.model';


@Injectable({
  providedIn: 'root'
})

export class PlayerService implements IPlayerService {

  private playersUrl = 'assets/data/players.json';
  private http = inject(HttpClient);

  getPlayers(): Observable<IPlayer[]> {
    return this.http.get<{playersLegends: IPlayer[] }>(this.playersUrl).pipe(map(players => players.playersLegends));
  }

  getPlayerById(id: number): Observable<IPlayer> {
    return this.http.get<{playersLegends: IPlayer[]}>(this.playersUrl).pipe(
      map(response => {
        const player = response.playersLegends.find(player => player.pId === id);
        if (!player) {
          throw new Error(`Player with ID ${id} not found`);
        }
        return player;
      })
    );
  }

}
