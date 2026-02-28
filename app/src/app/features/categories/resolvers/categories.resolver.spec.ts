import { TestBed } from '@angular/core/testing';
import { CategoriesApi } from '../api/categories.api';
import { throwError } from 'rxjs';

class MockCategoriesApi {
  getAllCategories = vi.fn();
  getVisibleCategories = vi.fn();
}

describe('Categories resolvers', () => {
  let categoriesApi: MockCategoriesApi;
  // let allCategoriesResolver: ResolveFn<Category[]>;
  // let visibleCategoriesResolver: ResolveFn<Category[]>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: CategoriesApi, useClass: MockCategoriesApi }],
    });
    // allCategoriesResolver = TestBed.inject(allCategoriesResolver) as ResolveFn<Category[]>;
    // visibleCategoriesResolver = TestBed.inject(visibleCategoriesResolver) as ResolveFn<Category[]>;
    categoriesApi = TestBed.inject(CategoriesApi) as unknown as MockCategoriesApi;
  });

  it('should catch error in allCategoriesResolver', async () => {
    categoriesApi.getAllCategories.mockReturnValueOnce(throwError(() => new Error('API error')));
    // TO DO
    // const obs$ = allCategoriesResolver();
    // await expect(() => firstValueFrom(obs$)).rejects.toThrow(error);
  });

  it('should catch error in visibleCategoriesResolver', async () => {
    categoriesApi.getVisibleCategories.mockReturnValueOnce(throwError(() => new Error('API error')));
    // TO DO
    // const obs$ = visibleCategoriesResolver();
    // await expect(() => firstValueFrom(obs$)).rejects.toThrow(error);
  });
});
