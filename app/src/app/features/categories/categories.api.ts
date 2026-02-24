import { inject, Injectable } from '@angular/core';
import { Categories } from './categories.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export const BASE_URL = '/api';

@Injectable({
  providedIn: 'root',
})
export class CategoriesApi {
  private readonly http = inject(HttpClient);

  /**
   * Get all categories.
   * @returns Categories[]
   */
  getAllCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${BASE_URL}/all-categories`);
  }

  /**
   * Get visible categories.
   * @returns number[]
   */
  getVisibleCategories(): Observable<number[]> {
    return this.http.get<number[]>(`${BASE_URL}/visible-categories`);
  }
}
