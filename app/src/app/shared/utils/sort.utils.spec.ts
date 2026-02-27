import { alphaSort } from './sort.utils';

describe('sort', () => {
  describe('alphaSort', () => {
    it('Should sort data alphabeticaly using string comparison', () => {
      expect(alphaSort('1', '2')).toEqual(-1);
      expect(alphaSort('2', '1')).toEqual(1);
      expect(alphaSort('2', '2')).toEqual(0);
      expect(alphaSort('abc', 'def')).toEqual(-1);
      expect(alphaSort('def', 'abc')).toEqual(1);
      expect(alphaSort('abc', 'abc')).toEqual(0);
      expect(alphaSort('', '')).toEqual(0);
      expect(alphaSort('1ab', '1bc')).toEqual(-1);
    });
  });
});
