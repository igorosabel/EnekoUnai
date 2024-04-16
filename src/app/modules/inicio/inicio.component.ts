import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PertsonaInterface } from 'src/app/interfaces/interfaces';
import { HeaderComponent } from 'src/app/modules/shared/components/header/header.component';

@Component({
  standalone: true,
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  imports: [
    NgStyle,
    RouterModule,
    HeaderComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class InicioComponent implements OnInit {
  zerrendaGuztia: PertsonaInterface[] = [
    {
      letra: 'E',
      izena: 'ENEKO',
      abizena: 'GOROSABEL',
      kolorea: '#0000ff',
      familia: 1,
    },
    {
      letra: 'U',
      izena: 'UNAI',
      abizena: 'GOROSABEL',
      kolorea: '#0000ff',
      familia: 1,
    },
    {
      letra: 'A',
      izena: 'ANA',
      abizena: 'CASANUEVA',
      kolorea: '#28cd1d',
      familia: 1,
    },
    {
      letra: 'I',
      izena: 'IÑIGO',
      abizena: 'GOROSABEL',
      kolorea: '#0000ff',
      familia: 1,
    },
    {
      letra: 'B',
      izena: 'BLANCA',
      abizena: 'MARTINEZ',
      kolorea: '#5656ed',
      familia: 1,
    },
    {
      letra: 'E',
      izena: 'EIDER',
      abizena: 'ZUGAZUA',
      kolorea: '#872dcb',
      familia: 3,
    },
    {
      letra: 'I',
      izena: 'IRAIDE',
      abizena: 'GOROSABEL',
      kolorea: '#ff00f7',
      familia: 3,
    },
    {
      letra: 'I',
      izena: 'IMANOL',
      abizena: 'GOROSABEL',
      kolorea: '#ff0942',
      familia: 3,
    },
    {
      letra: 'P',
      izena: 'PATXI',
      abizena: 'AYASTUY',
      kolorea: '#0000ff',
      familia: 2,
    },
    {
      letra: 'A',
      izena: 'AMAIA',
      abizena: 'PIÑEIRO',
      kolorea: '#ff00f7',
      familia: 2,
    },
    {
      letra: 'A',
      izena: 'AMAIA',
      abizena: 'CASANUEVA',
      kolorea: '#0000ff',
      familia: 2,
    },
    {
      letra: 'E',
      izena: 'ERNESTO',
      abizena: 'GOROSABEL',
      kolorea: '#0000ff',
      familia: 4,
    },
    {
      letra: 'T',
      izena: 'TERESA',
      abizena: 'FERNANDEZ',
      kolorea: '#ff00f7',
      familia: 4,
    },
    {
      letra: 'P',
      izena: 'PITI',
      abizena: 'FERNANDEZ',
      kolorea: '#0000ff',
      familia: 4,
    },
    {
      letra: 'I',
      izena: 'ICIAR',
      abizena: 'GOROSABEL',
      kolorea: '#28cd1d',
      familia: 5,
    },
    {
      letra: 'J',
      izena: 'JON',
      abizena: 'URRA',
      kolorea: '#ff0942',
      familia: 5,
    },
  ];

  zerrenda: PertsonaInterface[] = [];
  aukeratuta: number = 1;

  ngOnInit(): void {
    this.zerrendaEguneratu(1);
  }

  zerrendaEguneratu(zein: number): void {
    this.aukeratuta = zein;

    this.zerrenda = this.zerrendaGuztia.filter(
      (x: PertsonaInterface): boolean => {
        return x.familia === this.aukeratuta;
      }
    );
  }
}
