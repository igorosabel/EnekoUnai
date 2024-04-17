export interface PertsonaInterface {
  letra: string;
  izena: string;
  abizena: string;
  kolorea: string;
  letrak: string;
  familia: number;
}

export interface FamiliaInterface {
  id: number;
  izena: string;
}

export interface MemoryLevel {
  id: number;
  name: string;
  num: number;
  icon: string;
}

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
  fin: string;
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
