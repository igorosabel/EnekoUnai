import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

@Component({
  standalone: true,
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  imports: [MaterialModule, RouterModule, HeaderComponent],
})
export class InicioComponent {}
