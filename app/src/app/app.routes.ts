import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'visible-categories',
    loadComponent: () => import('./features/categories/visible-categories/visible-categories.component').then((m) => m.VisibleCategoriesComponent),
    data: {
      title: 'Catégories',
    },
  },
  {
    path: '**',
    redirectTo: 'visible-categories',
  },
];
