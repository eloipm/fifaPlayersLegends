import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
