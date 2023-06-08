import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user-search',
    loadComponent: () => import('./features/user-search/user-search.component').then(c => c.UserSearchComponent)
  },
  {
    path: 'user-details/:username',
    loadComponent: () => import('./features/user-details/user-details.component').then(c => c.UserDetailsComponent)
  },
  {
    path: '',
    redirectTo: 'user-search',
    pathMatch: 'full'
  }
];
