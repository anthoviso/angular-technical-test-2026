import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { FooterComponent } from './footer.component';
import { CategoriesService } from '@features/categories/services/categories.service';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

describe('Footer', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let categoriesService: CategoriesService;
  let fb: NonNullableFormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fb = TestBed.inject(NonNullableFormBuilder);
    categoriesService = TestBed.inject(CategoriesService);
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should reset valid form on submited', () => {
    const mockForm = fb.group({
      search: fb.control<string>(''),
      group: fb.control<string>(''),
      categoryId: fb.control<number | undefined>(1, Validators.required),
    });
    vitest.spyOn(categoriesService, 'form', 'get').mockReturnValue(mockForm);
    const spyFormReset = vitest.spyOn(mockForm, 'reset');
    component['submited']();
    expect(spyFormReset).toHaveBeenCalled();
  });

  it('Should not reset invalid form on submited', () => {
    const mockForm = fb.group({
      search: fb.control<string>(''),
      group: fb.control<string>(''),
      categoryId: fb.control<number | undefined>(undefined, Validators.required),
    });
    mockForm.setErrors({ invalid: true });
    vitest.spyOn(categoriesService, 'form', 'get').mockReturnValue(mockForm);
    const spyFormReset = vitest.spyOn(mockForm, 'reset');
    component['submited']();
    expect(spyFormReset).not.toHaveBeenCalled();
  });
});
