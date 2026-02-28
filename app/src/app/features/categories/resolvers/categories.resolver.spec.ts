import { TestBed } from '@angular/core/testing';
import { CategoriesApi } from '../api/categories.api';
import { firstValueFrom, Observable, throwError } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EnvironmentInjector, runInInjectionContext } from '@angular/core';
import { allCategoriesResolver, visibleCategoriesResolver } from './categories.resolver';
import { Category } from '../categories.models';

class MockCategoriesApi {
  getAllCategories = vi.fn();
  getVisibleCategories = vi.fn();
}

describe('Categories resolvers', () => {
  let categoriesApi: MockCategoriesApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: CategoriesApi, useClass: MockCategoriesApi }],
    });
    categoriesApi = TestBed.inject(CategoriesApi) as unknown as MockCategoriesApi;
  });

  it('should catch error in allCategoriesResolver', async () => {
    categoriesApi.getAllCategories.mockReturnValueOnce(throwError(() => new Error('API error')));
    const result = runInInjectionContext(TestBed.inject(EnvironmentInjector), () =>
      allCategoriesResolver({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot),
    );
    await expect(firstValueFrom(result as Observable<Category[]>)).rejects.toThrow('Error: API error - Unable to fetch all categories');
  });

  it('should catch error in visibleCategoriesResolver', async () => {
    categoriesApi.getVisibleCategories.mockReturnValueOnce(throwError(() => new Error('API error')));
    const result = runInInjectionContext(TestBed.inject(EnvironmentInjector), () =>
      visibleCategoriesResolver({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot),
    );
    await expect(firstValueFrom(result as Observable<number[]>)).rejects.toThrow('Error: API error - Unable to fetch visible categories');
  });
});
