import { Component, OnInit, inject } from '@angular/core';
import { IPlayer } from '../../../../models/player.model';
import { ActivatedRoute, Router } from '@angular/router';
import { IPlayerService } from '../../../../services/player.service.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})


export class PlayersComponent implements OnInit {

  player: IPlayer | undefined;
  errorMessage: string | undefined;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private playerService = inject(IPlayerService);
  private translate = inject(TranslateService);

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

  getSemicircleBackground(value: string): string {
    const parsedValue = parseInt(value, 10);
    const color = parsedValue >= 70 ? '#4CAF50' : parsedValue >= 50 ? '#FFC107' : '#F44336';
    const length = parsedValue * 0.5;
    return `linear-gradient(90deg, ${color} 50%, transparent 50%, transparent ${length}%, #f0f0f0 ${length}%)`;
  }

  goToVideos(id: number): void {
    this.router.navigate(['/home/players/', id, 'videos'])
  }
}
