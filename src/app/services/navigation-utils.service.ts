import { Injectable, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavigationUtilsService {

  private router = inject(Router);
  private sanitizer = inject(DomSanitizer);

  getSafeVideoUrl(link: string): SafeResourceUrl {
    const videoId = link.split('v=')[1];
    const embedUrl = `${environment.youtubeEmbedBaseUrl}${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  goToTeams(routeActive: ActivatedRoute): void {
    this.router.navigate(['teams'], { relativeTo: routeActive.parent });
  }

  goToVideos(id: number): void {
    this.router.navigate(['/home/players/', id, 'videos']);
  }
}
