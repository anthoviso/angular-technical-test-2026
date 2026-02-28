import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Category, Group } from '../categories.models';
import { CategoryComponent } from '../components/category/category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { SortPipe } from '@shared/pipes/sort.pipe';
import { FRAGMENTS } from 'app/app.routes';
import { TagComponent } from '@shared/components/tag/tag.component';
import { CategoriesForm, CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-visible-categories',
  templateUrl: './visible-categories.component.html',
  styleUrl: './visible-categories.component.scss',
  imports: [CategoryComponent, ReactiveFormsModule, SortPipe, TagComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisibleCategoriesComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly categoriesService = inject(CategoriesService);

  // Resolved datas
  private readonly allCategories = toSignal<Category[]>(this.route.data.pipe(map((data) => data['allCategories'])));
  private readonly visibleCategoriesIds = toSignal<number[]>(this.route.data.pipe(map((data) => data['visibleCategories'])));

  // Route datas
  protected readonly fragment = toSignal(this.route.fragment, { initialValue: '' });
  protected readonly FRAGMENTS = FRAGMENTS;

  // Category service shared data
  protected readonly form = this.categoriesService.form;
  private readonly formValuesChange = toSignal<Partial<CategoriesForm>>(this.form.valueChanges);
  protected readonly formSelectedCategoryId = this.categoriesService.formSelectedCategoryId;

  // Calculated Data
  private readonly visibleCategories = computed<Category[]>(() => this.getVisibleCategories());
  protected readonly groupCategories = computed<Group[]>(() => this.getGroupCategories());
  protected readonly searchResults = computed<Category[]>(() => this.getSearchResults());
  protected readonly groupedSearchResults = computed<{ group: Group; categories: Category[] }[]>(() => this.getGroupedSearchResults());

  // Return all visible categories by filtering all categories with visible categories ids
  private getVisibleCategories(): Category[] {
    const allCategories = this.allCategories();
    const visibleCategoriesIds = this.visibleCategoriesIds();

    if (!allCategories || !visibleCategoriesIds) {
      return [];
    }

    return allCategories.filter((category) => visibleCategoriesIds.includes(category.id));
  }

  // Return all groups of visible categories without duplicates
  private getGroupCategories(): Group[] {
    return this.getVisibleCategories().reduce((groups: Group[], category) => {
      if (category.group && !groups.some((group) => group.id === category.group?.id)) {
        groups.push(category.group);
      }
      return groups;
    }, []);
  }

  // Return search results by filtering visible categories with form values
  private getSearchResults(): Category[] {
    const formValues: Partial<CategoriesForm> | undefined = this.formValuesChange();

    if (!formValues) {
      return this.visibleCategories();
    }

    return this.visibleCategories().filter((category) => {
      const matchesGroup = !formValues.group || category.group?.id === +formValues.group;
      const matchesSearch = !formValues.search || category.wording.toLowerCase().includes(formValues.search.toLowerCase());

      return matchesGroup && matchesSearch;
    });
  }

  // Return search grouped results by filtering visible categories with form values
  private getGroupedSearchResults(): { group: Group; categories: Category[] }[] {
    const NO_GROUP: Group = {
      id: -1,
      name: 'Aucun groupe défini',
      color: '',
    };

    return this.searchResults().reduce((acc: { group: Group; categories: Category[] }[], category: Category) => {
      const group: Group = category.group ?? NO_GROUP;
      let existingGroup: { group: Group; categories: Category[] } | undefined = acc.find((entry) => entry.group.id === group.id);

      if (!existingGroup) {
        existingGroup = {
          group,
          categories: [],
        };
        acc.push(existingGroup);
      }

      existingGroup.categories.push(category);

      return acc;
    }, []);
  }
}
