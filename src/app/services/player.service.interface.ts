import { Observable } from 'rxjs';
import { IPlayer } from '../models/player.model';
import { Injectable } from '@angular/core';


@Injectable()
export abstract class IPlayerService {
  abstract getPlayers(): Observable<IPlayer[]>;
  abstract getPlayerById(id: number): Observable<IPlayer | undefined>;
}
