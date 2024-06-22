import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from '../players/components/players/players.component';
import { VideosComponent } from '../videos/components/videos/videos.component';
import { TeamsComponent } from '../teams/components/teams/teams.component';

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
        path: 'players',
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


// [{
//   path: 'home',
//   component: HomeComponent,
//   data: {
//     breadcrumb: 'Home'
//   },
//   children: [
//     {
//       path: '',
//       data: {
//         breadcrumb: null
//       },
//       component: HomeComponent,
//     },
//     {
//       path: 'players',
//       loadChildren: () =>
//         import('../players/players.module').then((file) => file.PlayersModule),
//       data: {
//         breadcrumb: 'Players'
//       }
//     },
//     // {
//     //   path: 'videos',
//     //   loadChildren: () =>
//     //     import('../videos/videos.module').then((file) => file.VideosModule),
//     // },
//     // {
//     //   path: 'teams',
//     //   loadChildren: () =>
//     //     import('../teams/teams.module').then((file) => file.TeamsModule),
//     // },
//     // {
//     //   path: '',
//     //   redirectTo: 'home',
//     //   pathMatch: 'full',

//     // },
//   ],
// },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
