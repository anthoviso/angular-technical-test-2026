import { Category, Group } from '@features/categories/categories.models';

export function createGroup(options?: Partial<Group>): Group {
  const defaults = {
    id: 0,
    name: 'defaultName',
    color: 'defaultColor',
  };

  return {
    ...defaults,
    ...options,
  };
}

export function createCategory(options?: Partial<Category>): Category {
  const defaults = {
    id: 0,
    wording: 'test wording',
    description: null,
  };

  return {
    ...defaults,
    ...options,
  };
}

export const allCategoriesMockData: Category[] = [
  createCategory({ id: 1, wording: 'aaa', group: createGroup({ id: 1, name: 'categoryGrp2' }) }),
  createCategory({ id: 2, wording: 'ccc', group: createGroup({ id: 2, name: 'categoryGrp1' }) }),
  createCategory({ id: 3, wording: 'bbb', group: createGroup({ id: 2, name: 'categoryGrp1' }) }),
  createCategory({ id: 5, wording: 'eee' }),
  createCategory({ id: 4, wording: 'ddd' }),
];
export const visibleCategoriesMockData: Category[] = [
  allCategoriesMockData[0],
  allCategoriesMockData[1],
  allCategoriesMockData[2],
  allCategoriesMockData[3],
];
export const visibleCategoriesIdsMockData: number[] = visibleCategoriesMockData.map((data) => data.id);
