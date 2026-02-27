import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CategoryComponent } from './category.component';
import { createCategory } from '@shared/mocks/category.mock';

describe('Category', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('category', createCategory());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
