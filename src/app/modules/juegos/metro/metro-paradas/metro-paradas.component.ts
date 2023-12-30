import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { ActivatedRoute, Params } from '@angular/router';
import {
  MetroCiudadLineaInterface,
  MetroDataInterface,
} from 'src/app/interfaces/interfaces';
import { METRO_DATA } from 'src/app/modules/juegos/metro/metro-data';
import { HeaderComponent } from 'src/app/modules/shared/components/header/header.component';

@Component({
  selector: 'app-metro-paradas',
  standalone: true,
  imports: [HeaderComponent, MatCardModule, MatStepperModule],
  templateUrl: './metro-paradas.component.html',
  styleUrl: './metro-paradas.component.scss',
})
export default class MetroParadasComponent implements OnInit {
  metroData: MetroDataInterface = METRO_DATA;
  metroSelected: string = null;
  lineaNum: number = null;
  linea: MetroCiudadLineaInterface;
  title: string;
  paradas: string[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.metroSelected = params.ciudad;
      this.lineaNum = parseInt(params.num);
      this.title = this.metroData[this.metroSelected].ciudad;
      this.linea = this.metroData[this.metroSelected].lineas.find(
        (x: MetroCiudadLineaInterface): boolean => {
          return x.num === this.lineaNum;
        }
      );
      this.title += ' - Línea ' + this.linea.num;
      this.paradas = this.linea.paradas;
      console.log(this.paradas);
    });
  }
}
