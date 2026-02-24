import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectInputComponent {}
