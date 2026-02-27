// Utility function for alphabetical sorting of strings
export function alphaSort(a: string, b: string): number {
  return a.toLowerCase().localeCompare(b.toLowerCase());
}
