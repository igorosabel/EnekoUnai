import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

@Component({
  standalone: true,
  selector: 'app-listado-juegos',
  templateUrl: './listado-juegos.component.html',
  imports: [MaterialModule, RouterModule, HeaderComponent],
})
export default class ListadoJuegosComponent {}
