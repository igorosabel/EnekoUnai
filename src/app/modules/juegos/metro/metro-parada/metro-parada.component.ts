import {
  Component,
  input,
  InputSignal,
  InputSignalWithTransform,
  numberAttribute,
  OnInit,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
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
  imports: [HeaderComponent, MatCardModule, RouterModule],
  templateUrl: './metro-parada.component.html',
  styleUrl: './metro-parada.component.scss',
})
export default class MetroParadaComponent implements OnInit {
  metroData: MetroDataInterface = METRO_DATA;
  ciudad: InputSignal<MetroCiudad> = input.required<MetroCiudad>();
  linea: InputSignalWithTransform<number, unknown> = input.required({
    transform: numberAttribute,
  });
  parada: InputSignalWithTransform<number, unknown> = input.required({
    transform: numberAttribute,
  });
  paradaSelected: MetroParadaInterface | undefined;
  title: string = '';
  sentidoInicio: string | null = null;
  correspondenciasInicio: MetroParadaDetalleInterface[] = [];
  sentidoFin: string | null = null;
  correspondenciasFin: MetroParadaDetalleInterface[] = [];

  ngOnInit(): void {
    this.paradaSelected = this.metroData[this.ciudad()].paradas.find(
      (x: MetroParadaInterface): boolean => {
        return x.id === this.parada();
      }
    );
    if (this.paradaSelected !== undefined) {
      this.title = this.paradaSelected.nombre;

      for (const correspondenciaNum of this.paradaSelected.correspondencia) {
        const linea: MetroLineaInterface | undefined = this.metroData[this.ciudad()].lineas.find(
          (x: MetroLineaInterface): boolean => {
            return x.num === correspondenciaNum;
          }
        );

        if (linea !== undefined && this.parada() !== linea.paradas[0]) {
          const correspondenciaInicio: MetroParadaDetalleInterface = {
            num: linea.num,
            sentido: linea.inicio,
            color: linea.color,
            colorTexto: linea.colorTexto,
            minutos: Math.floor(Math.random() * 5) + 1,
          };
          this.correspondenciasInicio.push(correspondenciaInicio);
        }

        if (linea !== undefined && this.parada() !== linea.paradas[linea.paradas.length - 1]) {
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
  }
}
