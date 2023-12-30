import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import {
  MetroCiudadLineaInterface,
  MetroDataInterface,
} from 'src/app/interfaces/interfaces';
import { METRO_DATA } from 'src/app/modules/juegos/metro/metro-data';
import { HeaderComponent } from 'src/app/modules/shared/components/header/header.component';

@Component({
  selector: 'app-metro-lineas',
  standalone: true,
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
  metroSelected: string = null;
  title: string = null;
  lineas: MetroCiudadLineaInterface[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.metroSelected = params.ciudad;
      this.title = this.metroData[this.metroSelected].ciudad;
      this.lineas = this.metroData[this.metroSelected].lineas;
    });
  }
}
