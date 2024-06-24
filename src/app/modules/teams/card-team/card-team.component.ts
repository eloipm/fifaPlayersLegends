import { Component, Input } from '@angular/core';
import { ITeams } from '../../../models/teams.model';

@Component({
  selector: 'app-card-team',
  template: `
    <div class="team-card">
      <div class="team-info">
        <p>{{team.clubName}}</p>
        <p>{{team.signingDate}} - {{team.transferDate}}</p>
      </div>
      <img [src]="team.clubImage" alt="{{team.clubName}}" class="club-image">
    </div>
  `,
  styleUrl: './card-team.component.scss'
})
export class CardTeamComponent {
  @Input()team!: ITeams;
}
