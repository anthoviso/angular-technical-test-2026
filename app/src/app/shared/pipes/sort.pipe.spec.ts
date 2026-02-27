import { createCategory } from '@shared/mocks/category.mock';
import { SortPipe } from './sort.pipe';
import { Category } from '@features/categories/categories.models';

describe('sortPipe', () => {
  let pipe: SortPipe;

  beforeEach(() => (pipe = new SortPipe()));

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('Should sort data alphabeticaly from category list and wording parameter', () => {
      const categories: Category[] = [
        createCategory({ id: 3, wording: 'ccc' }),
        createCategory({ id: 1, wording: 'aaa' }),
        createCategory({ id: 2, wording: 'bbb' }),
      ];
      const expectedSortedCategories: Category[] = [
        createCategory({ id: 1, wording: 'aaa' }),
        createCategory({ id: 2, wording: 'bbb' }),
        createCategory({ id: 3, wording: 'ccc' }),
      ];
      expect(pipe.transform(categories, 'wording')).toStrictEqual(expectedSortedCategories);
    });

    it('Should sort data alphabeticaly from category list and id parameter', () => {
      const categories: Category[] = [createCategory({ id: 2 }), createCategory({ id: 3 }), createCategory({ id: 1 })];
      const expectedSortedCategories: Category[] = [createCategory({ id: 1 }), createCategory({ id: 2 }), createCategory({ id: 3 })];
      expect(pipe.transform(categories, 'id')).toStrictEqual(expectedSortedCategories);
    });
  });
});
