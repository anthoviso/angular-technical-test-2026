import { Pipe, PipeTransform } from '@angular/core';
import { alphaSort } from '@shared/utils/sort.utils';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {
  transform<T>(data: T[], propertyName: keyof T): T[] {
    if (!Array.isArray(data) || !propertyName) {
      return data;
    }

    return [...data].sort((a, b) => {
      const valueA = a[propertyName];
      const valueB = b[propertyName];

      if (valueA == null) return 1;
      if (valueB == null) return -1;

      return alphaSort(String(valueA), String(valueB));
    });
  }
}
