import { Routes } from '@angular/router';
import { APP_ROUTES } from 'app/app.routes';
import { allCategoriesMockData, visibleCategoriesIdsMockData } from './category.mock';
import { of } from 'rxjs';

export const testRoutes: Routes = [
  {
    path: APP_ROUTES.categories,
    loadComponent: () => import('@features/categories/visible-categories/visible-categories.component').then((m) => m.VisibleCategoriesComponent),
    resolve: {
      allCategories: () => of(allCategoriesMockData),
      visibleCategories: () => of(visibleCategoriesIdsMockData),
    },
  },
  {
    path: '**',
    redirectTo: APP_ROUTES.categories,
  },
];
