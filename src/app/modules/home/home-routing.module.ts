import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'players',
      loadChildren: () =>
        import('../players/players.module').then((file) => file.PlayersModule),
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',

    },
  ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
