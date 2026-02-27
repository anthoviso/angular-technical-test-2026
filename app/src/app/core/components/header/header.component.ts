import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { TabComponent } from '../../../shared/components/tab/tab.component';
import { FRAGMENTS } from 'app/app.routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [TabComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  protected readonly title: Signal<string> = toSignal(this.getTitle(), { initialValue: '' });
  protected readonly fragment = toSignal(this.route.fragment, { initialValue: '' });

  protected readonly FRAGMENTS = FRAGMENTS;

  private getTitle(): Observable<string> {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
      map(() => {
        let route = this.router.routerState.root;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route.snapshot.data['title'] ?? '';
      }),
    );
  }
}
