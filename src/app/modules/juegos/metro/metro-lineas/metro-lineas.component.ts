import { NgStyle } from '@angular/common';
import { Component, input, InputSignal, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import {
  MetroCiudad,
  MetroDataInterface,
  MetroLineaInterface,
} from '@interfaces/metro.interfaces';
import { METRO_DATA } from '@modules/juegos/metro/metro-data';
import HeaderComponent from '@shared/components/header/header.component';

@Component({
  selector: 'app-metro-lineas',
  templateUrl: './metro-lineas.component.html',
  styleUrl: './metro-lineas.component.scss',
  imports: [
    HeaderComponent,
    MatCardModule,
    MatButtonModule,
    NgStyle,
    RouterModule,
  ],
})
export default class MetroLineasComponent implements OnInit {
  metroData: MetroDataInterface = METRO_DATA;
  ciudad: InputSignal<MetroCiudad | undefined> = input<MetroCiudad | undefined>(
    undefined
  );
  title: string = '';
  lineas: MetroLineaInterface[] = [];

  ngOnInit(): void {
    const ciudad: MetroCiudad | undefined = this.ciudad();
    if (ciudad !== undefined) {
      this.title = this.metroData[ciudad].ciudad;
      this.lineas = this.metroData[ciudad].lineas;
    }
  }
}
