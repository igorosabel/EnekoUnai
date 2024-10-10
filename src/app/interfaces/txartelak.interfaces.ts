export interface KlaseaInterface {
  norena: string;
  umeak: UmeaInterface[];
}

export interface UmeaInterface {
  id: number;
  izena: string;
  argazkia: string;
}

export interface TxartelMotaInterface {
  id: number;
  mota: string;
  argazkia: string;
}

export interface TxartelaInterface {
  id: number;
  mota: TxartelMotaInterface | null;
  umea: UmeaInterface | null;
}
