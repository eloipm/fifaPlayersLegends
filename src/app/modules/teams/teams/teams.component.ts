import { Component, OnInit, inject } from '@angular/core';
import { IPlayer } from '../../../models/player.model';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../../services/player.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent implements OnInit{

  player!: IPlayer;
  private routeActive = inject(ActivatedRoute);
  private playerService = inject(PlayerService);

  ngOnInit() {
    const id = +this.routeActive.snapshot.paramMap.get('id')!;
    this.playerService.getPlayerById(id).subscribe(player => {
      this.player = player;
      console.log(this.player);

    });

  }

}
