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
      letrak: '#fff',
      familia: 1,
    },
    {
      letra: 'U',
      izena: 'UNAI',
      abizena: 'GOROSABEL',
      kolorea: '#0000ff',
      letrak: '#fff',
      familia: 1,
    },
    {
      letra: 'A',
      izena: 'ANA',
      abizena: 'CASANUEVA',
      kolorea: '#28cd1d',
      letrak: '#fff',
      familia: 1,
    },
    {
      letra: 'I',
      izena: 'IÑIGO',
      abizena: 'GOROSABEL',
      kolorea: '#0000ff',
      letrak: '#fff',
      familia: 1,
    },
    {
      letra: 'B',
      izena: 'BLANCA',
      abizena: 'MARTINEZ',
      kolorea: '#5656ed',
      letrak: '#fff',
      familia: 1,
    },
    {
      letra: 'E',
      izena: 'EIDER',
      abizena: 'ZUGAZUA',
      kolorea: '#872dcb',
      letrak: '#fff',
      familia: 3,
    },
    {
      letra: 'I',
      izena: 'IRAIDE',
      abizena: 'GOROSABEL',
      kolorea: '#ff00f7',
      letrak: '#fff',
      familia: 3,
    },
    {
      letra: 'I',
      izena: 'IMANOL',
      abizena: 'GOROSABEL',
      kolorea: '#ff0942',
      letrak: '#fff',
      familia: 3,
    },
    {
      letra: 'P',
      izena: 'PATXI',
      abizena: 'AYASTUY',
      kolorea: '#0000ff',
      letrak: '#fff',
      familia: 2,
    },
    {
      letra: 'A',
      izena: 'AMAIA',
      abizena: 'PIÑEIRO',
      kolorea: '#ff00f7',
      letrak: '#fff',
      familia: 2,
    },
    {
      letra: 'A',
      izena: 'AMAIA',
      abizena: 'CASANUEVA',
      kolorea: '#0000ff',
      letrak: '#fff',
      familia: 2,
    },
    {
      letra: 'E',
      izena: 'ERNESTO',
      abizena: 'GOROSABEL',
      kolorea: '#0000ff',
      letrak: '#fff',
      familia: 4,
    },
    {
      letra: 'T',
      izena: 'TERESA',
      abizena: 'FERNANDEZ',
      kolorea: '#ff00f7',
      letrak: '#fff',
      familia: 4,
    },
    {
      letra: 'P',
      izena: 'PITI',
      abizena: 'FERNANDEZ',
      kolorea: '#0000ff',
      letrak: '#fff',
      familia: 4,
    },
    {
      letra: 'I',
      izena: 'ICIAR',
      abizena: 'GOROSABEL',
      kolorea: '#28cd1d',
      letrak: '#fff',
      familia: 5,
    },
    {
      letra: 'J',
      izena: 'JON',
      abizena: 'URRA',
      kolorea: '#ff0942',
      letrak: '#fff',
      familia: 5,
    },
    {
      letra: '57',
      izena: 'MIRIBILLA',
      abizena: 'BASURTOKO OSPITALEA',
      kolorea: '#6c6c6c',
      letrak: '#fff',
      familia: 6,
    },
    {
      letra: '71',
      izena: 'MIRIBILLA',
      abizena: 'SAN IGNAZIO',
      kolorea: '#ff7b09',
      letrak: '#000',
      familia: 6,
    },
    {
      letra: '75',
      izena: 'SAN ADRIAN',
      abizena: 'ATXURI',
      kolorea: '#1cf323',
      letrak: '#fff',
      familia: 6,
    },
    {
      letra: '76',
      izena: 'ARTAZU/XALBADOR',
      abizena: 'MOYUA',
      kolorea: '#fbff09',
      letrak: '#000',
      familia: 6,
    },
    {
      letra: 'C-1',
      izena: 'SANTURTZI',
      abizena: 'BILBAO-ABANDO',
      kolorea: '#ff0000',
      letrak: '#fff',
      familia: 7,
    },
    {
      letra: 'C-2',
      izena: 'MUSKIZ',
      abizena: 'BILBAO-ABANDO',
      kolorea: '#2af91c',
      letrak: '#fff',
      familia: 7,
    },
    {
      letra: 'C-3',
      izena: 'ORDUÑA',
      abizena: 'BILBAO-ABANDO',
      kolorea: '#0000ff',
      letrak: '#fff',
      familia: 7,
    },
    {
      letra: 'C-4',
      izena: 'MIRANDA DE EBRO',
      abizena: 'BILBAO-ABANDO',
      kolorea: '#ff8d00',
      letrak: '#fff',
      familia: 7,
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
