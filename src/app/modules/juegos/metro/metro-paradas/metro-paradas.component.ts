import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import {
  MetroDataInterface,
  MetroLineaInterface,
  MetroParadaInterface,
} from 'src/app/interfaces/interfaces';
import { METRO_DATA } from 'src/app/modules/juegos/metro/metro-data';
import { HeaderComponent } from 'src/app/modules/shared/components/header/header.component';

@Component({
  selector: 'app-metro-paradas',
  standalone: true,
  imports: [HeaderComponent, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './metro-paradas.component.html',
  styleUrl: './metro-paradas.component.scss',
})
export default class MetroParadasComponent implements OnInit {
  metroData: MetroDataInterface = METRO_DATA;
  metroSelected: string = null;
  lineaNum: number = null;
  linea: MetroLineaInterface = null;
  title: string = null;
  paradas: MetroParadaInterface[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.metroSelected = params.ciudad;
      this.lineaNum = parseInt(params.num);
      this.title = this.metroData[this.metroSelected].ciudad;
      this.linea = this.metroData[this.metroSelected].lineas.find(
        (x: MetroLineaInterface): boolean => {
          return x.num === this.lineaNum;
        }
      );
      this.title += ' - Línea ' + this.linea.num;
      for (const num of this.linea.paradas) {
        const parada: MetroParadaInterface = this.metroData[
          this.metroSelected
        ].paradas.find((x: MetroParadaInterface): boolean => {
          return x.id === num;
        });
        this.paradas.push(parada);
      }
    });
  }
}
