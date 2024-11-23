import { NgClass } from '@angular/common';
import {
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TxartelaInterface } from '@interfaces/txartelak.interfaces';

@Component({
  selector: 'app-txartela',
  imports: [NgClass, MatIcon, MatIconButton],
  templateUrl: './txartela.component.html',
  styleUrl: './txartela.component.scss',
})
export default class TxartelaComponent {
  txartela: InputSignal<TxartelaInterface> =
    input.required<TxartelaInterface>();
  ezabatu: InputSignal<boolean> = input.required<boolean>();
  kendu: OutputEmitterRef<number> = output<number>();

  ezabatuTxartela(): void {
    this.kendu.emit(this.txartela().id);
  }
}
