import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { CategoriesApi, BASE_URL } from './categories.api';
import { allCategoriesMockData, visibleCategoriesIdsMockData, visibleCategoriesMockData } from '@shared/mocks/category.mock';
import { firstValueFrom } from 'rxjs';

describe('CategoriesApi', () => {
  let api: CategoriesApi;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesApi, provideHttpClientTesting()],
    });
    api = TestBed.inject(CategoriesApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });

  it('should get all categories', async () => {
    const promise = firstValueFrom(api.getAllCategories());
    const req = httpMock.expectOne(`${BASE_URL}/all-categories`);
    expect(req.request.method).toBe('GET');
    req.flush(allCategoriesMockData);
    const allCategories = await promise;
    expect(allCategories).toEqual(allCategoriesMockData);
  });

  it('should get visible categories ids', async () => {
    const promise = firstValueFrom(api.getVisibleCategories());
    const req = httpMock.expectOne(`${BASE_URL}/visible-categories`);
    expect(req.request.method).toBe('GET');
    req.flush(visibleCategoriesMockData);
    const visibleCategories = await promise;
    expect(visibleCategories).toEqual(visibleCategoriesIdsMockData);
  });
});
