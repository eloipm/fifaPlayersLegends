import { Injectable, inject } from '@angular/core';
import { IPlayerService } from './player.service.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IPlayer } from '../models/player.model';
import { environment } from '../../environments/environment';
import { EncryptionService } from './encryption.service';


@Injectable({
  providedIn: 'root'
})

export class PlayerService implements IPlayerService {

  private playersUrl:string;
  private http = inject(HttpClient);
  private decrypt= inject(EncryptionService);

  constructor(){
    this.playersUrl=this.decrypt.decrypt(environment.DATA_PLAYERS);
  }
  
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
