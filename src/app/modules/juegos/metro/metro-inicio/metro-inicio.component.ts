import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import HeaderComponent from '@shared/components/header/header.component';

@Component({
  selector: 'app-metro-inicio',
  templateUrl: './metro-inicio.component.html',
  imports: [RouterModule, HeaderComponent, MatCardModule, MatButtonModule],
})
export default class MetroInicioComponent {}
