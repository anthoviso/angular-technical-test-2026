import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  readonly text = input.required<string>();
  readonly icon = input<string>();
  readonly isActive = input<boolean>(false);
  readonly fragment = input<string>();
}
