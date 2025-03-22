import {
  Component,
  input,
  InputSignal,
  InputSignalWithTransform,
  numberAttribute,
  OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import {
  MetroCiudad,
  MetroDataInterface,
  MetroLineaInterface,
  MetroParadaInterface,
} from '@interfaces/metro.interfaces';
import { METRO_DATA } from '@modules/juegos/metro/metro-data';
import HeaderComponent from '@shared/components/header/header.component';

@Component({
  selector: 'app-metro-paradas',
  imports: [HeaderComponent, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './metro-paradas.component.html',
  styleUrl: './metro-paradas.component.scss',
})
export default class MetroParadasComponent implements OnInit {
  metroData: MetroDataInterface = METRO_DATA;
  ciudad: InputSignal<MetroCiudad> = input.required<MetroCiudad>();
  num: InputSignalWithTransform<number, unknown> = input.required({
    transform: numberAttribute,
  });
  linea: MetroLineaInterface | null = null;
  title: string = '';
  paradas: MetroParadaInterface[] = [];

  ngOnInit(): void {
    this.title = this.metroData[this.ciudad()].ciudad;
    const findLinea: MetroLineaInterface | undefined = this.metroData[
      this.ciudad()
    ].lineas.find((x: MetroLineaInterface): boolean => {
      return x.num === this.num();
    });
    if (findLinea !== undefined) {
      this.linea = findLinea;
      this.title += ' - Línea ' + this.linea.num;
      for (const num of this.linea.paradas) {
        const parada: MetroParadaInterface | undefined = this.metroData[
          this.ciudad()
        ].paradas.find((x: MetroParadaInterface): boolean => {
          return x.id === num;
        });
        if (parada !== undefined) {
          this.paradas.push(parada);
        }
      }
    }
  }
}
