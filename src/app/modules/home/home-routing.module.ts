import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from '../players/components/players/players.component';
import { VideosComponent } from '../videos/videos/videos.component';
import { TeamsComponent } from '../teams/teams/teams.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: '',
        data: {
          breadcrumb: null
        },
        component: HomeComponent,
      },
      {
        path: 'players/:id',
        data: {
          breadcrumb: 'Players'
        },

        children: [
          {
            path: '',
            data: {
              breadcrumb: null
            },
            component: PlayersComponent,
          },
          {
            path: 'videos',
            data: {
              breadcrumb: 'Videos'
            },
            children: [
              {
                path: '',
                data: {
                breadcrumb: null
              },
              component: VideosComponent,
            },
            {
              path: 'teams',
              data: {
                breadcrumb: 'Teams'
              },
              component: TeamsComponent,
            },
            ]
          },

        ],
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
