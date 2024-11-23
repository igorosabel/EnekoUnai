import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import HeaderComponent from '@shared/components/header/header.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  imports: [
    RouterModule,
    HeaderComponent,
    MatCardModule,
    MatCardContent,
    MatButtonModule,
    MatIconModule,
  ],
})
export default class InicioComponent {}
