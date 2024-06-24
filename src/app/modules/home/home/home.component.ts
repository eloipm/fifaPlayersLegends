import { Component, OnInit, inject } from '@angular/core';
import { IPlayerService } from '../../../services/player.service.interface';
import { IPlayer } from '../../../models/player.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit{

  players: IPlayer[] = [];

  private playerService= inject(IPlayerService);
  private router = inject(Router);


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
