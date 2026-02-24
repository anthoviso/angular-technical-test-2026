import { Component, inject } from '@angular/core';
import { CategoriesApi } from '../categories.api';
import { toSignal } from '@angular/core/rxjs-interop';
import { Categories } from '../categories.models';

@Component({
  selector: 'app-visible-categories',
  templateUrl: './visible-categories.component.html',
})
export class VisibleCategoriesComponent {
  private readonly categoriesApi = inject(CategoriesApi);
  protected readonly categories = toSignal<Categories[]>(this.categoriesApi.getAllCategories());
}
