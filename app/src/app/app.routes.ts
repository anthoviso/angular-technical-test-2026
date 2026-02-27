import { Routes } from '@angular/router';
import { allCategoriesResolver, visibleCategoriesResolver } from '@features/categories/categories.resolver';

export const routes: Routes = [
  {
    path: 'visible-categories',
    loadComponent: () => import('./features/categories/visible-categories/visible-categories.component').then((m) => m.VisibleCategoriesComponent),
    data: {
      title: 'Catégories',
    },
    resolve: {
      allCategories: allCategoriesResolver,
      visibleCategories: visibleCategoriesResolver,
    },
  },
  {
    path: '**',
    redirectTo: 'visible-categories',
  },
];
