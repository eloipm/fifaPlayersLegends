import { ITeams } from './teams.model';
import { IVideos } from './videos.model';

export interface IPlayer {
  pId: number;
  name: string;
  lastName: string;
  pace: string;
  shooting: string;
  passing: string;
  dribbling: string;
  defending: string;
  physical: string;
  skills: string;
  weakFoot: string;
  cardImage: string;
  playerImage: string;
  videos: IVideos[];
  teams: ITeams[];
}


