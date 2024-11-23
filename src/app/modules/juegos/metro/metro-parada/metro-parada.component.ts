import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import {
  MetroCiudad,
  MetroDataInterface,
  MetroLineaInterface,
  MetroParadaDetalleInterface,
  MetroParadaInterface,
} from '@interfaces/metro.interfaces';
import { METRO_DATA } from '@modules/juegos/metro/metro-data';
import HeaderComponent from '@shared/components/header/header.component';

@Component({
  selector: 'app-metro-parada',
  imports: [HeaderComponent, MatCardModule, NgStyle, RouterModule],
  templateUrl: './metro-parada.component.html',
  styleUrl: './metro-parada.component.scss',
})
export default class MetroParadaComponent implements OnInit {
  metroData: MetroDataInterface = METRO_DATA;
  metroSelected: MetroCiudad = 'bilbao';
  lineaNum: number | null = null;
  paradaId: number | null = null;
  parada: MetroParadaInterface | undefined;
  title: string = '';
  sentidoInicio: string | null = null;
  correspondenciasInicio: MetroParadaDetalleInterface[] = [];
  sentidoFin: string | null = null;
  correspondenciasFin: MetroParadaDetalleInterface[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.metroSelected = params['ciudad'];
      this.lineaNum = parseInt(params['linea']);
      this.paradaId = parseInt(params['parada']);

      this.parada = this.metroData[this.metroSelected].paradas.find(
        (x: MetroParadaInterface): boolean => {
          return x.id === this.paradaId;
        }
      );
      if (this.parada !== undefined) {
        this.title = this.parada.nombre;

        for (const correspondenciaNum of this.parada.correspondencia) {
          const linea: MetroLineaInterface | undefined = this.metroData[
            this.metroSelected
          ].lineas.find((x: MetroLineaInterface): boolean => {
            return x.num === correspondenciaNum;
          });

          if (linea !== undefined && this.paradaId !== linea.paradas[0]) {
            const correspondenciaInicio: MetroParadaDetalleInterface = {
              num: linea.num,
              sentido: linea.inicio,
              color: linea.color,
              colorTexto: linea.colorTexto,
              minutos: Math.floor(Math.random() * 5) + 1,
            };
            this.correspondenciasInicio.push(correspondenciaInicio);
          }

          if (
            linea !== undefined &&
            this.paradaId !== linea.paradas[linea.paradas.length - 1]
          ) {
            const correspondenciaFin: MetroParadaDetalleInterface = {
              num: linea.num,
              sentido: linea.fin !== null ? linea.fin : linea.inicio,
              color: linea.color,
              colorTexto: linea.colorTexto,
              minutos: Math.floor(Math.random() * 5) + 1,
            };
            this.correspondenciasFin.push(correspondenciaFin);
          }
        }
      }

      this.correspondenciasInicio.sort(function (
        a: MetroParadaDetalleInterface,
        b: MetroParadaDetalleInterface
      ): number {
        return a.minutos - b.minutos;
      });
      this.correspondenciasFin.sort(function (
        a: MetroParadaDetalleInterface,
        b: MetroParadaDetalleInterface
      ): number {
        return a.minutos - b.minutos;
      });
    });
  }
}
