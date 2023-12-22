export interface MemoryLevel {
  id: number;
  name: string;
  num: number;
  icon: string;
}

export interface MetroCiudadInterface {
  ciudad: string;
  lineas: number[];
}

export interface MetroDataInterface {
  bilbao: MetroCiudadInterface;
  madrid: MetroCiudadInterface;
}
