export interface MemoryLevel {
  id: number;
  name: string;
  num: number;
  icon: string;
}

export interface MemoryPerson {
  name: string;
  img: string;
}

export interface MemoryOption {
  id: string;
  option: string;
  people: MemoryPerson[];
}
