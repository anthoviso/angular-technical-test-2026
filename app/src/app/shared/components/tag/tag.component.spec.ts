import { TagComponent } from '@shared/components/tag/tag.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

describe('Tag', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
