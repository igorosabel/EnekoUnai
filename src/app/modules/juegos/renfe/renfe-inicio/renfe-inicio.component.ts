import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import HeaderComponent from '@shared/components/header/header.component';

@Component({
  selector: 'app-renfe-inicio',
  imports: [RouterModule, HeaderComponent, MatCardModule, MatButtonModule],
  templateUrl: './renfe-inicio.component.html',
})
export default class RenfeInicioComponent {}
