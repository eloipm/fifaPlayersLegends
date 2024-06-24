import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPlayer } from '../models/player.model';
import { EncryptionService } from './encryption.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private playersUrl = './assets/data/encrypted-players.json';

  private http = inject(HttpClient);
  private encryptionService = inject(EncryptionService);


  // Obtener jugadores desencriptados
  getPlayers(): Observable<IPlayer[]> {
    return this.http.get(this.playersUrl, { responseType: 'text' }).pipe(
      map(data => this.decryptPlayers(data))
    );
  }

  // Obtener jugador por ID desencriptado
  getPlayerById(id: number): Observable<IPlayer> {
    return this.http.get(this.playersUrl, { responseType: 'text' }).pipe(
      map(data => this.decryptPlayers(data)),
      map(players => {
        const player = players.find(player => player.pId === id);
        if (!player) {
          throw new Error(`Player with ID ${id} not found`);
        }
        return player;
      })
    );
  }

  // Método privado para desencriptar jugadores
  private decryptPlayers(encryptedData: string): IPlayer[] {
    // Desencriptar la cadena de datos
    const decryptedData = this.encryptionService.decrypt(encryptedData);
    
    // Convertir la cadena desencriptada a objetos IPlayer[]
    const players: IPlayer[] = JSON.parse(decryptedData).playersLegends;
    
    return players;
  }
}
