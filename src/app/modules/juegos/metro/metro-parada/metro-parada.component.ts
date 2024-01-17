import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import {
  MetroDataInterface,
  MetroLineaInterface,
  MetroParadaDetalleInterface,
  MetroParadaInterface,
} from 'src/app/interfaces/interfaces';
import { METRO_DATA } from 'src/app/modules/juegos/metro/metro-data';
import { HeaderComponent } from 'src/app/modules/shared/components/header/header.component';

@Component({
  selector: 'app-metro-parada',
  standalone: true,
  imports: [HeaderComponent, MatCardModule, NgStyle, RouterModule],
  templateUrl: './metro-parada.component.html',
  styleUrl: './metro-parada.component.scss',
})
export default class MetroParadaComponent implements OnInit {
  metroData: MetroDataInterface = METRO_DATA;
  metroSelected: string = null;
  lineaNum: number = null;
  paradaId: number = null;
  parada: MetroParadaInterface = null;
  title: string = null;
  sentidoInicio: string = null;
  correspondenciasInicio: MetroParadaDetalleInterface[] = [];
  sentidoFin: string = null;
  correspondenciasFin: MetroParadaDetalleInterface[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.metroSelected = params.ciudad;
      this.lineaNum = parseInt(params.linea);
      this.paradaId = parseInt(params.parada);

      this.parada = this.metroData[this.metroSelected].paradas.find(
        (x: MetroParadaInterface): boolean => {
          return x.id === this.paradaId;
        }
      );
      this.title = this.parada.nombre;

      for (const correspondenciaNum of this.parada.correspondencia) {
        const linea: MetroLineaInterface = this.metroData[
          this.metroSelected
        ].lineas.find((x: MetroLineaInterface): boolean => {
          return x.num === correspondenciaNum;
        });

        if (this.paradaId !== linea.paradas[0]) {
          const correspondenciaInicio: MetroParadaDetalleInterface = {
            num: linea.num,
            sentido: linea.inicio,
            color: linea.color,
            colorTexto: linea.colorTexto,
            minutos: Math.floor(Math.random() * 5) + 1,
          };
          this.correspondenciasInicio.push(correspondenciaInicio);
        }

        if (this.paradaId !== linea.paradas[linea.paradas.length - 1]) {
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
