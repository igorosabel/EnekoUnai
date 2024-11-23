import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatFabButton } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatOptgroup, MatOption, MatSelect } from '@angular/material/select';
import {
  KlaseaInterface,
  TxartelaInterface,
  TxartelMotaInterface,
  UmeaInterface,
} from '@interfaces/txartelak.interfaces';
import HeaderComponent from '@shared/components/header/header.component';
import TxartelaComponent from '@shared/components/txartela/txartela.component';
import { TXARTELAK_DATA, UMEAK_DATA } from './txartelak-data';

@Component({
  selector: 'app-txartelak',
  imports: [
    HeaderComponent,
    MatFabButton,
    MatIcon,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatButton,
    FormsModule,
    MatFormField,
    MatSelect,
    MatOption,
    MatOptgroup,
    MatLabel,
    TxartelaComponent,
  ],
  templateUrl: './txartelak.component.html',
  styleUrl: './txartelak.component.scss',
})
export default class TxartelakComponent {
  txartelMotak: TxartelMotaInterface[] = TXARTELAK_DATA;
  umeak: KlaseaInterface[] = UMEAK_DATA;
  txartelak: TxartelaInterface[] = [];

  showGehitu: WritableSignal<boolean> = signal<boolean>(false);

  txartelBerria: TxartelaInterface = { id: -1, mota: null, umea: null };
  txartelMota: number = -1;
  umea: number = -1;

  gehitu(): void {
    this.showGehitu.update((value: boolean): boolean => !value);

    if (this.showGehitu()) {
      this.txartelBerria = { id: -1, mota: null, umea: null };
      this.txartelMota = -1;
    }
  }

  bilatuUmea(id: number): UmeaInterface | null {
    for (let klasea of this.umeak) {
      const umeaEncontrado: UmeaInterface | undefined = klasea.umeak.find(
        (umea: UmeaInterface): boolean => umea.id === id
      );
      if (umeaEncontrado) {
        return umeaEncontrado;
      }
    }
    return null;
  }

  aldatuTxartela(): void {
    if (this.txartelMota !== -1 && this.umea !== -1) {
      const txartelMota: TxartelMotaInterface | undefined =
        this.txartelMotak.find(
          (x: TxartelMotaInterface): boolean => x.id == this.txartelMota
        );
      if (txartelMota) {
        this.txartelBerria.mota = txartelMota;
      }
      const umea: UmeaInterface | null = this.bilatuUmea(this.umea);
      if (umea) {
        this.txartelBerria.umea = umea;
      }
    }
  }

  sortu(): void {
    const txartela: TxartelaInterface = {
      id: new Date().getTime(),
      mota: this.txartelBerria.mota,
      umea: this.txartelBerria.umea,
    };
    this.txartelak.push(txartela);
    this.txartelBerria = { id: -1, mota: null, umea: null };
    this.txartelMota = -1;
    this.umea = -1;
    this.showGehitu.set(false);
  }

  kenduTxartela(id: number): void {
    const ind: number = this.txartelak.findIndex(
      (x: TxartelaInterface): boolean => x.id === id
    );
    this.txartelak.splice(ind, 1);
  }
}
