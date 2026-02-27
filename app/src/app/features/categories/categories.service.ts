import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private readonly fb = inject(NonNullableFormBuilder);

  form = this.fb.group<{ search: FormControl<string>; group: FormControl<string>; categoryId: FormControl<number | undefined> }>({
    search: this.fb.control<string>(''),
    group: this.fb.control<string>(''),
    categoryId: this.fb.control<number | undefined>(undefined, Validators.required),
  });
  readonly formValuesChange = toSignal<Partial<{ search: string; group: string; categoryId: number }>>(this.form.valueChanges);
  readonly formSelectedCategoryId = computed<number | undefined>(() => this.formValuesChange()?.categoryId);
}
