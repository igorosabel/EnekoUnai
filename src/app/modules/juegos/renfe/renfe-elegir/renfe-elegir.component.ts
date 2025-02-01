import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import HeaderComponent from '@shared/components/header/header.component';

@Component({
  selector: 'app-renfe-elegir',
  imports: [HeaderComponent, MatCardModule],
  templateUrl: './renfe-elegir.component.html',
  styleUrl: './renfe-elegir.component.scss',
})
export default class RenfeElegirComponent {}
