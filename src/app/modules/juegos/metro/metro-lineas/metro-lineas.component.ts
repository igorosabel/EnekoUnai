import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
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
  metroSelected: MetroCiudad | null = null;
  title: string = '';
  lineas: MetroLineaInterface[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.metroSelected = params['ciudad'];
      if (this.metroSelected !== null) {
        this.title = this.metroData[this.metroSelected].ciudad;
        this.lineas = this.metroData[this.metroSelected].lineas;
      }
    });
  }
}
