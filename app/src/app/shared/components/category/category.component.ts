import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { Category } from '../../../features/categories/categories.models';
import { CategoriesService } from '../../../features/categories/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TagComponent],
})
export class CategoryComponent {
  private readonly categoriesService = inject(CategoriesService);

  readonly category = input.required<Category>();
}
