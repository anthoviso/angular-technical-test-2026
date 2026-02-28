import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CategoriesService } from '@features/categories/services/categories.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly categoriesService = inject(CategoriesService);

  protected submited(): void {
    const form = this.categoriesService.form;

    if (!form.valid) {
      return;
    }

    form.reset();
  }
}
