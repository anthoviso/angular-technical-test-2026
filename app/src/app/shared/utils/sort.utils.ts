/**
 * Utility function for alphabetical sorting of strings.
 * Returns a negative number if a comes before b,
 * 0 if they are equal,
 * and return positive number if a comes after b (for Array.sort)
 */
export function alphaSort(a: string, b: string): number {
  return a.toLowerCase().localeCompare(b.toLowerCase());
}
