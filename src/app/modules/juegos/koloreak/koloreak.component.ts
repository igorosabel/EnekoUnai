import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import HeaderComponent from '@shared/components/header/header.component';

@Component({
  selector: 'app-koloreak',
  templateUrl: './koloreak.component.html',
  styleUrls: ['./koloreak.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    MatCardModule,
    MatSliderModule,
  ],
})
export default class KoloreakComponent {
  colorR: number = 0;
  colorG: number = 0;
  colorB: number = 0;
}
