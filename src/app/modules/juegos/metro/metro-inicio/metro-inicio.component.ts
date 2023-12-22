import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/modules/shared/components/header/header.component';

@Component({
  selector: 'app-metro-inicio',
  standalone: true,
  templateUrl: './metro-inicio.component.html',
  imports: [RouterModule, HeaderComponent, MatCardModule, MatButtonModule],
})
export default class MetroInicioComponent {}
