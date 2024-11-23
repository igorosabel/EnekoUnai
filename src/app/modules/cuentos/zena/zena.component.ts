import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import HeaderComponent from '@shared/components/header/header.component';

@Component({
  selector: 'app-zena',
  templateUrl: './zena.component.html',
  styleUrls: ['./zena.component.scss'],
  imports: [HeaderComponent, MatCardModule],
})
export default class ZenaComponent {}
