import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  RenfeLineaInterface,
  RenfeLineaShowInterface,
} from '@interfaces/renfe.interfaces';
import HeaderComponent from '@shared/components/header/header.component';
import { RENFE_DATA } from '../renfe-data';

@Component({
  selector: 'app-renfe-lista',
  imports: [HeaderComponent, MatCardModule],
  templateUrl: './renfe-lista.component.html',
  styleUrl: './renfe-lista.component.scss',
})
export default class RenfeListaComponent implements OnInit {
  lineas: RenfeLineaInterface[] = RENFE_DATA;
  show: RenfeLineaShowInterface = {};

  ngOnInit(): void {
    for (const linea of this.lineas) {
      this.show[linea.id] = false;
    }
    console.log(this.show);
  }

  showLinea(id: string): void {
    this.show[id] = !this.show[id];
  }
}
