import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './core/error-page/error-page.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },

  // { path: 'error', component: ErrorPageComponent },
  // { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
