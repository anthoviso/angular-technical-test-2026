import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TagComponent } from '@shared/components/tag/tag.component';
import { Category } from '../../categories.models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TagComponent],
})
export class CategoryComponent {
  readonly category = input.required<Category>();
  readonly showGroupTag = input<boolean>(true);
  readonly isActive = input<boolean>(false);
}
