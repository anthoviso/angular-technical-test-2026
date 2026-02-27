import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabComponent } from './tab.component';
import { provideRouter } from '@angular/router';

describe('Tab', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('text', 'onglet');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
