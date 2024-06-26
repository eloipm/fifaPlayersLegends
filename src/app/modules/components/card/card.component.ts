import { Component, Input } from '@angular/core';
import { IPlayer } from '../../../models/player.model';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card__image-container">
        <img src="../../{{player.playerImage}}" alt="photo to {{player.name}} {{player.lastName}}" class="card__image">
      </div>
    </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() player!: IPlayer;
}
