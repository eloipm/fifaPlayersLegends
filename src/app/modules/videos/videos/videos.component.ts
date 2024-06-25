import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPlayer } from '../../../models/player.model';
import { SafeResourceUrl } from '@angular/platform-browser';
import { IPlayerService } from '../../../services/player.service.interface';
import { NavigationUtilsService } from '../../../services/navigation-utils.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent implements OnInit {

  player!: IPlayer;

  private routeActive = inject(ActivatedRoute);
  private playerService = inject(IPlayerService);
  private navigationUtils = inject(NavigationUtilsService);

  ngOnInit() {
    const id = +this.routeActive.snapshot.paramMap.get('id')!;
    this.playerService.getPlayerById(id).subscribe(player => {
      this.player = player;
    });
  }

  getSafeVideoUrl(link: string): SafeResourceUrl {
    return this.navigationUtils.getSafeVideoUrl(link);
  }

  goToTeams(): void {
    this.navigationUtils.goToTeams(this.routeActive);
  }

}
