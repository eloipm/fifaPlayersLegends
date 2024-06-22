import { Component, inject } from '@angular/core';
import { IPlayerService } from '../../../services/player.service.interface';
import { PlayerService } from '../../../services/player.service';
import { IPlayer } from '../../../models/player.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [
    { provide: IPlayerService, useClass: PlayerService }
  ]
})

export class HomeComponent {

  players: IPlayer[] = [];

  private playerService= inject(IPlayerService);
  private router = inject(Router);


  ngOnInit() {
    this.playerService.getPlayers().subscribe(players => {
      this.players = players;
      console.log(this.players);
    });
  }

}
