export interface MemoryLevel {
  id: number;
  name: string;
  num: number;
  icon: string;
}

export interface MetroCiudadLineaInterface {
  num: number;
  inicio: string;
  fin: string;
  color: string;
  colorTexto: string;
  paradas: string[];
}

export interface MetroCiudadInterface {
  ciudad: string;
  lineas: MetroCiudadLineaInterface[];
}

export interface MetroDataInterface {
  bilbao: MetroCiudadInterface;
  madrid: MetroCiudadInterface;
}
