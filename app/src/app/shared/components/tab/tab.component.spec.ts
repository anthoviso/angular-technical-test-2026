import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabComponent } from './tab.component';
import { provideRouter } from '@angular/router';

describe('Tab', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;

    fixture.componentRef.setInput('text', 'onglet');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Conditional Rendering', () => {
    it('should hide icon when not defined', () => {
      const icon = compiled.querySelector('[data-testid="tabIcon"]');
      expect(icon).toBeNull();
    });
    it('should show icon when defined', () => {
      fixture.componentRef.setInput('icon', '');
      const icon = compiled.querySelector('[data-testid="tabIcon"]');
      expect(icon).toBeDefined();
    });
  });
});
