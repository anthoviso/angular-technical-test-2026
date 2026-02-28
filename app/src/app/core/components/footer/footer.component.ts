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

  // This method is called when the form is submitted. It checks if the form is valid and resets it if it is.
  protected submited(): void {
    const form = this.categoriesService.form;

    if (!form.valid) {
      return;
    }

    // Maybe doing something with the form data here, like sending it to an API or updating some state
    // Then reset the form after successful submission
    form.reset();
  }
}
