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

  protected readonly description = computed<string>(() => this.getSanitizedDescription(this.category().description));

  private getSanitizedDescription(description: string | null): string {
    const NO_DESC_VALUE = 'Aucune description';

    if (!description) {
      return NO_DESC_VALUE;
    }

    return this.domSanitizer.sanitize(SecurityContext.HTML, description) ?? NO_DESC_VALUE;
  }
}
