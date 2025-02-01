export interface RenfeLineaInterface {
  id: string;
  nombre: string;
  color: string;
  paradas: string[];
}

export interface RenfeLineaShowInterface {
  [key: string]: boolean;
}
