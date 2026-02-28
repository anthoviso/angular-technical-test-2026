import { Routes } from '@angular/router';
import { allCategoriesResolver, visibleCategoriesResolver } from '@features/categories/resolvers/categories.resolver';

export const FRAGMENTS = {
  alpha: 'alpha',
};

export const APP_ROUTES = {
  categories: 'visible-categories',
};

export const routes: Routes = [
  {
    path: APP_ROUTES.categories,
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
    redirectTo: APP_ROUTES.categories,
  },
];
