import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { HeaderComponent } from 'src/app/modules/shared/components/header/header.component';

@Component({
  standalone: true,
  selector: 'app-listado-cuentos',
  templateUrl: './listado-cuentos.component.html',
  imports: [MaterialModule, RouterModule, HeaderComponent],
})
export default class ListadoCuentosComponent {}
