import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Category } from '../categories.models';

export const BASE_URL = '/api';

@Injectable({
  providedIn: 'root',
})
export class CategoriesApi {
  private readonly http = inject(HttpClient);

  /**
   * Get all categories.
   * @returns Category[]
   */
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${BASE_URL}/all-categories`);
  }

  /**
   * Get visible categories.
   * @returns  number[]
   */
  getVisibleCategories(): Observable<number[]> {
    return this.http.get<{ id: number }[]>(`${BASE_URL}/visible-categories`).pipe(map((categories) => categories.map((category) => category.id)));
  }
}
