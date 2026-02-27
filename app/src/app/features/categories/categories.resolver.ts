import { ResolveFn } from '@angular/router';
import { Category } from './categories.models';
import { catchError, Observable } from 'rxjs';
import { CategoriesApi } from './categories.api';
import { inject } from '@angular/core';

export const allCategoriesResolver: ResolveFn<Category[]> = (): Observable<Category[]> => {
  const categoriesApi = inject(CategoriesApi);
  return categoriesApi.getAllCategories().pipe(
    catchError((error) => {
      throw error;
    }),
  );
};

export const visibleCategoriesResolver: ResolveFn<number[]> = (): Observable<number[]> => {
  const categoriesApi = inject(CategoriesApi);
  return categoriesApi.getVisibleCategories().pipe(
    catchError((error) => {
      throw error;
    }),
  );
};
