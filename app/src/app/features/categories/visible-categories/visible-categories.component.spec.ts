import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import { VisibleCategoriesComponent } from './visible-categories.component';
import { testRoutes } from '@shared/mocks/routes.mock';
import { APP_ROUTES } from 'app/app.routes';
import { allCategoriesMockData, visibleCategoriesIdsMockData } from '@shared/mocks/category.mock';
import { of, BehaviorSubject } from 'rxjs';

describe('Category', () => {
  let component: VisibleCategoriesComponent;
  let fixture: ComponentFixture<VisibleCategoriesComponent>;
  let router: Router;
  let compiled: HTMLElement;
  let fragmentSubject: BehaviorSubject<string>;

  beforeEach(async () => {
    fragmentSubject = new BehaviorSubject<string>('');
    await TestBed.configureTestingModule({
      imports: [VisibleCategoriesComponent],
      providers: [
        provideRouter(testRoutes),
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              allCategories: allCategoriesMockData,
              visibleCategories: visibleCategoriesIdsMockData,
            }),
            fragment: fragmentSubject.asObservable(),
          },
        },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(VisibleCategoriesComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should access to rendered data grouped by category group', async () => {
    const dataListForAlphaFragment = compiled.querySelector('[data-testid="visibleCatFragment"]');
    expect(dataListForAlphaFragment).toBeNull();
  });

  it('Should access to rendered data order alphabeticaly', async () => {
    fragmentSubject.next('alpha');
    await router.navigateByUrl(`/${APP_ROUTES.categories}#alpha`);
    await fixture.whenStable();
    fixture.detectChanges();
    expect(router.url).toBe(`/${APP_ROUTES.categories}#alpha`);
    const dataListForGroupFragment = compiled.querySelector('[data-testid="visibleCatFragment"]');
    expect(dataListForGroupFragment).not.toBeNull();
  });

  it('should have resolved data', async () => {
    expect(component['allCategories']()).toEqual(allCategoriesMockData);
    expect(component['visibleCategoriesIds']()).toEqual(visibleCategoriesIdsMockData);
  });

  it('should return all visible categories', async () => {
    const result = component['visibleCategories']();
    expect(result.length).toBe(4);
  });

  it('should return unique group categories', async () => {
    const groups = component['groupCategories']();
    expect(groups.length).toBe(2);
    expect(groups.map((g) => g.name)).toEqual(['categoryGrp2', 'categoryGrp1']);
  });

  it('should filter categories by search text', async () => {
    component['form'].patchValue({ search: 'c' });
    fixture.detectChanges();

    const results = component['searchResults']();
    expect(results.length).toBe(1);
    expect(results[0].wording).toBe('ccc');
  });

  it('should filter categories by group id', async () => {
    component['form'].patchValue({ group: '1' });
    fixture.detectChanges();

    const results = component['searchResults']();
    expect(results.length).toBe(1);
    expect(results[0].group?.name).toBe('categoryGrp2');
  });

  it('should group search results by group', async () => {
    const grouped = component['groupedSearchResults']();

    expect(grouped.length).toBe(3);
    expect(grouped[0].categories.length).toBe(1);
    expect(grouped[1].categories.length).toBe(2);
    expect(grouped[2].categories.length).toBe(1);
  });
});
