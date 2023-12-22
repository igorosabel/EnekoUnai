import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from 'src/app/modules/shared/components/header/header.component';

@Component({
  standalone: true,
  selector: 'app-zena',
  templateUrl: './zena.component.html',
  styleUrls: ['./zena.component.scss'],
  imports: [HeaderComponent, MatCardModule],
})
export default class ZenaComponent {}
