import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
 private route = inject(Router);



 goToTeams(id: number): void {
  this.route.navigate(['/home/players/', id, 'videos/teams'])
}
}
