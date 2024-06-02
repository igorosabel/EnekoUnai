import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import HeaderComponent from '@shared/components/header/header.component';

@Component({
  standalone: true,
  selector: 'app-tomasa',
  templateUrl: './tomasa.component.html',
  styleUrls: ['./tomasa.component.scss'],
  imports: [HeaderComponent, MatCardModule],
})
export default class TomasaComponent {}
