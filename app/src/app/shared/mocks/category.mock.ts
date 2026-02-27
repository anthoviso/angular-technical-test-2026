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
