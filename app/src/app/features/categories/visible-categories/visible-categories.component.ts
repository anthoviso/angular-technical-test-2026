import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CategoriesApi } from '../categories.api';
import { toSignal } from '@angular/core/rxjs-interop';
import { Category, Group } from '../categories.models';
import { CategoryComponent } from '../components/category/category.component';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-visible-categories',
  templateUrl: './visible-categories.component.html',
  styleUrl: './visible-categories.component.scss',
  imports: [CategoryComponent, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisibleCategoriesComponent {
  private readonly categoriesApi = inject(CategoriesApi);
  private readonly fb = inject(NonNullableFormBuilder);

  private readonly allCategories = toSignal<Category[]>(this.categoriesApi.getAllCategories());
  private readonly visibleCategoriesIds = toSignal<number[]>(this.categoriesApi.getVisibleCategories());

  private readonly visibleCategories = computed<Category[]>(() => this.getVisibleCategories());
  protected readonly groupCategories = computed<Group[]>(() => this.getGroupCategories());
  protected readonly categoriesSearchResults = computed<Category[]>(() => this.getSearchResults());

  form = this.fb.group<{ search: FormControl<string>; group: FormControl<string> }>({
    search: this.fb.control<string>(''),
    group: this.fb.control<string>(''),
  });
  private readonly formValuesChange = toSignal<Partial<{ search: string; group: string }>>(this.form.valueChanges);

  private getVisibleCategories(): Category[] {
    const categories = this.allCategories();
    const visibleCategoryIds = this.visibleCategoriesIds();

    if (!categories || !visibleCategoryIds) {
      return [];
    }

    return categories.filter((category) => visibleCategoryIds.includes(category.id));
  }

  private getGroupCategories(): Group[] {
    return this.getVisibleCategories().reduce((groups: Group[], category) => {
      if (category.group && !groups.some((group) => group.id === category.group?.id)) {
        groups.push(category.group);
      }
      return groups;
    }, []);
  }

  private getSearchResults(): Category[] {
    const formValues: Partial<{ search: string; group: string }> | undefined = this.formValuesChange();

    if (!formValues) {
      return this.visibleCategories();
    }

    return this.visibleCategories().filter((category) => {
      const matchesGroup = !formValues.group || category.group?.id === +formValues.group;

      const matchesSearch = !formValues.search || category.wording.toLowerCase().includes(formValues.search.toLowerCase());

      return matchesGroup && matchesSearch;
    });
  }
}
