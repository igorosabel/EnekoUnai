import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import HeaderComponent from '@shared/components/header/header.component';

@Component({
  selector: 'app-renfe-lista',
  imports: [HeaderComponent, MatCardModule],
  templateUrl: './renfe-lista.component.html',
  styleUrl: './renfe-lista.component.scss',
})
export default class RenfeListaComponent {}
