export interface MetroParadaDetalleInterface {
  num: number;
  sentido: string;
  color: string;
  colorTexto: string;
  minutos: number;
}

export interface MetroParadaInterface {
  id: number;
  nombre: string;
  correspondencia: number[];
}

export interface MetroLineaInterface {
  num: number;
  inicio: string;
  fin: string | null;
  color: string;
  colorTexto: string;
  paradas: number[];
}

export interface MetroCiudadInterface {
  ciudad: string;
  lineas: MetroLineaInterface[];
  paradas: MetroParadaInterface[];
}

export interface MetroDataInterface {
  bilbao: MetroCiudadInterface;
  madrid: MetroCiudadInterface;
}

export type MetroCiudad = 'bilbao' | 'madrid';
