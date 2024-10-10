import { NgClass } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';
import { TxartelaInterface } from '@interfaces/txartelak.interfaces';

@Component({
  selector: 'app-txartela',
  standalone: true,
  imports: [NgClass],
  templateUrl: './txartela.component.html',
  styleUrl: './txartela.component.scss',
})
export default class TxartelaComponent {
  txartela: InputSignal<TxartelaInterface> = input.required();
}
