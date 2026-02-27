export interface Category {
  id: number;
  group?: Group;
  wording: string;
  description: string | null;
}

export interface Group {
  id: number;
  name: string;
  color: string;
}
