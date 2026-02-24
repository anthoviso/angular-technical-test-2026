import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CategoriesApi } from '../categories.api';
import { toSignal } from '@angular/core/rxjs-interop';
import { Category, Group } from '../categories.models';
import { CategoryComponent } from '../../../shared/components/category/category.component';
import { SearchInputComponent } from '../../../shared/components/search-input/search-input.component';
import { SelectInputComponent } from '../../../shared/components/select-input/select-input.component';

@Component({
  selector: 'app-visible-categories',
  templateUrl: './visible-categories.component.html',
  styleUrl: './visible-categories.component.scss',
  imports: [CategoryComponent, SearchInputComponent, SelectInputComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisibleCategoriesComponent {
  private readonly categoriesApi = inject(CategoriesApi);

  private readonly allCategories = toSignal<Category[]>(this.categoriesApi.getAllCategories());
  private readonly visibleCategoriesIds = toSignal<number[]>(this.categoriesApi.getVisibleCategories());

  protected readonly visibleCategories = computed<Category[]>(() => this.getVisibleCategories());
  protected readonly groupCategories = computed<Group[]>(() => this.getGroupCategories());

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
}
