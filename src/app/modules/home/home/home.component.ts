import { Component, OnInit, inject } from '@angular/core';
import { IPlayerService } from '../../../services/player.service.interface';
import { PlayerService } from '../../../services/player.service';
import { IPlayer } from '../../../models/player.model';
import { Router } from '@angular/router';
import { EncryptionService } from '../../../services/encryption.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [
    { provide: IPlayerService, useClass: PlayerService }
  ]
})

export class HomeComponent implements OnInit{

  players: IPlayer[] = [];

  private playerService= inject(IPlayerService);
  private router = inject(Router);
  private encryptionService = inject(EncryptionService);

  //decripted = this.encryptionService.decrypt(environment.DATA_PLAYERS)

  ngOnInit() {
    this.playerService.getPlayers().subscribe(players => {
      this.players = players;
      console.log(this.players);
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['home/players', id]);
  }
}