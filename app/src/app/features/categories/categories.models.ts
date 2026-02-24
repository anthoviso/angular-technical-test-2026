export interface Category {
  id: number;
  group?: Group;
  wording: string;
  description: string;
}

export interface Group {
  id: number;
  name: string;
  color: string;
}
