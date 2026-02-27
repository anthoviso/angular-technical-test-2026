import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { VisibleCategoriesComponent } from './visible-categories.component';

describe('Category', () => {
  let component: VisibleCategoriesComponent;
  let fixture: ComponentFixture<VisibleCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisibleCategoriesComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(VisibleCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
