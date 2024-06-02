import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import {
  MetroCiudad,
  MetroDataInterface,
  MetroLineaInterface,
  MetroParadaInterface,
} from '@interfaces/interfaces';
import { METRO_DATA } from '@modules/juegos/metro/metro-data';
import HeaderComponent from '@shared/components/header/header.component';

@Component({
  selector: 'app-metro-paradas',
  standalone: true,
  imports: [HeaderComponent, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './metro-paradas.component.html',
  styleUrl: './metro-paradas.component.scss',
})
export default class MetroParadasComponent implements OnInit {
  metroData: MetroDataInterface = METRO_DATA;
  metroSelected: MetroCiudad = 'bilbao';
  lineaNum: number | null = null;
  linea: MetroLineaInterface | null = null;
  title: string = '';
  paradas: MetroParadaInterface[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.metroSelected = params['ciudad'];
      this.lineaNum = parseInt(params['num']);
      this.title = this.metroData[this.metroSelected].ciudad;
      const findLinea: MetroLineaInterface | undefined = this.metroData[
        this.metroSelected
      ].lineas.find((x: MetroLineaInterface): boolean => {
        return x.num === this.lineaNum;
      });
      if (findLinea !== undefined) {
        this.linea = findLinea;
        this.title += ' - Línea ' + this.linea.num;
        for (const num of this.linea.paradas) {
          const parada: MetroParadaInterface | undefined = this.metroData[
            this.metroSelected
          ].paradas.find((x: MetroParadaInterface): boolean => {
            return x.id === num;
          });
          if (parada !== undefined) {
            this.paradas.push(parada);
          }
        }
      }
    });
  }
}
