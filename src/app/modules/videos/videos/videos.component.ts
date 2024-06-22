import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPlayer } from '../../../models/player.model';
import { PlayerService } from '../../../services/player.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent implements OnInit {

  player!: IPlayer;

  private route = inject(Router);
  private routeActive = inject(ActivatedRoute);
  private playerService = inject(PlayerService);
  private sanitizer = inject(DomSanitizer);

  ngOnInit() {
    const id = +this.routeActive.snapshot.paramMap.get('id')!;
    this.playerService.getPlayerById(id).subscribe(player => {
      this.player = player;
      console.log(this.player);

    });

  }

  getSafeVideoUrl(link: string): SafeResourceUrl {
    const videoId = link.split('v=')[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  goToTeams(id: number): void {
    this.route.navigate(['teams'], { relativeTo: this.routeActive.parent });
  }
  // goToTeams(id: number): void {
  //   this.router.navigate(['/home/players/', id, 'videos'])
  // }
}
