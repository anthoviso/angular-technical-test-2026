import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { testRoutes } from '@shared/mocks/routes.mock';

describe('Router', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter(testRoutes), provideHttpClientTesting()],
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  it('Should redirect to visible-categories when access app entrypoint', async () => {
    await router.navigateByUrl('/');
    expect(router.url).toBe(`/${APP_ROUTES.categories}`);
  });

  it('Should redirect to visible-categories when access undefined entrypoint', async () => {
    await router.navigateByUrl('/test');
    expect(router.url).toBe(`/${APP_ROUTES.categories}`);
  });
});
