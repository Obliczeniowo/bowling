import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'bowling',
    loadChildren:
      () => import('./views/bowling/bowling.module').then(m => m.BowlingModule)
  },
  {
    path: '**',
    redirectTo: 'bowling',
    pathMatch: 'full'
  }
];
