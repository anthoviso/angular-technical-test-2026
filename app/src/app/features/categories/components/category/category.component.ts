import { ChangeDetectionStrategy, Component, computed, inject, input, SecurityContext } from '@angular/core';
import { TagComponent } from '@shared/components/tag/tag.component';
import { Category } from '../../categories.models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TagComponent],
})
export class CategoryComponent {
  private readonly domSanitizer = inject(DomSanitizer);

  readonly category = input.required<Category>();
  readonly showGroupTag = input<boolean>(true);
  readonly isActive = input<boolean>(false);

  protected readonly description = computed<string>(() => {
    if (!this.category().description) {
      return 'Aucune description';
    }

    return this.domSanitizer.sanitize(SecurityContext.HTML, this.category().description) ?? 'Aucune description';
  });
}
