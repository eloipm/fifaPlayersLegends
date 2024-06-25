import { Component, OnInit, inject } from '@angular/core';
import { IPlayer } from '../../../../models/player.model';
import { ActivatedRoute } from '@angular/router';
import { IPlayerService } from '../../../../services/player.service.interface';
import { TranslateService } from '@ngx-translate/core';
import { NavigationUtilsService } from '../../../../services/navigation-utils.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})


export class PlayersComponent implements OnInit {

  player: IPlayer | undefined;
  errorMessage: string | undefined;

  private route = inject(ActivatedRoute);
  private playerService = inject(IPlayerService);
  private translate = inject(TranslateService);
  private navigationUtils = inject(NavigationUtilsService);

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.playerService.getPlayerById(id).subscribe({
      next: player => {
        this.player = player;
      },
      error: err => {
        this.translate.get('ERRORS.FETCH_PLAYER', { error: err.message }).subscribe(translatedMessage => {
          this.errorMessage = translatedMessage;
        });
      }
    });
  }

  goToVideos(id: number): void {
    this.navigationUtils.goToVideos(id);
  }
}
