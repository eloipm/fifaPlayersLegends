import { Component, OnInit, inject } from '@angular/core';
import { IPlayer } from '../../../../models/player.model';
import { ActivatedRoute } from '@angular/router';
import { IPlayerService } from '../../../../services/player.service.interface';
import { NavigationUtilsService } from '../../../../services/navigation-utils.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})


export class PlayersComponent implements OnInit {

  player: IPlayer | undefined;
  errorMessage: string | undefined;
  id: number | undefined;

  private route = inject(ActivatedRoute);
  private playerService = inject(IPlayerService);
  private navigationUtils = inject(NavigationUtilsService);


  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.playerService.getPlayerById(this.id).subscribe({
      next: player => {
        this.player = player;
      },
      error: err => {
          this.errorMessage = err.message;
      }
    });
  }

  goToVideos(id: number): void {
    this.navigationUtils.goToVideos(id);
  }
}
