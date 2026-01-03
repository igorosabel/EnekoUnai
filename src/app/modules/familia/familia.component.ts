import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatLabel, MatOption, MatSelect } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { FamiliaInterface, PertsonaInterface } from '@interfaces/familia.interfaces';
import HeaderComponent from '@shared/components/header/header.component';

@Component({
  selector: 'app-familia',
  imports: [
    RouterModule,
    HeaderComponent,
    MatCardModule,
    MatCardContent,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSelect,
    MatOption,
    MatFormField,
    MatLabel,
  ],
  templateUrl: './familia.component.html',
  styleUrl: './familia.component.scss',
})
export default class FamiliaComponent implements OnInit {
  aukeraZerrenda: FamiliaInterface[] = [
    { id: 1, izena: 'La Casilla' },
    { id: 2, izena: 'Kirikiño' },
    { id: 3, izena: 'Salburua' },
    { id: 4, izena: 'Parlamento' },
    { id: 5, izena: 'Ziordia' },
    { id: 6, izena: 'Autobusak' },
    { id: 7, izena: 'Trenak' },
  ];

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
      letra: '30',
      izena: 'MIRIBILLA',
      abizena: 'TXURDINAGA',
      kolorea: '#9e24b5',
      letrak: '#fff',
      familia: 6,
    },
    {
      letra: '40',
      izena: 'LA PEÑA',
      abizena: 'AYALA',
      kolorea: '#fbff09',
      letrak: '#000',
      familia: 6,
    },
    {
      letra: '55',
      izena: 'MIRIBILLA',
      abizena: 'MINA DEL MORRO',
      kolorea: '#126614',
      letrak: '#fff',
      familia: 6,
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
      letra: '72',
      izena: 'LARRASKITU',
      abizena: 'CASTAÑOS/GAZTELEKU',
      kolorea: '#ab5d19',
      letrak: '#fff',
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
      letra: '77',
      izena: 'MINA DEL MORRO',
      abizena: 'PEÑASCAL',
      kolorea: '#ff36f9',
      letrak: '#fff',
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
    this.zerrendaEguneratu();
  }

  zerrendaEguneratu(): void {
    this.zerrenda = this.zerrendaGuztia.filter((x: PertsonaInterface): boolean => {
      return x.familia === this.aukeratuta;
    });
  }
}
