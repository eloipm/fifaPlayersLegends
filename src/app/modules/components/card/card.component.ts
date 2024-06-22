import { Component, Input } from '@angular/core';
import { IPlayer } from '../../../models/player.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input('playerList') player!: IPlayer;

}
