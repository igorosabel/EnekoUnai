import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import HeaderComponent from '@shared/components/header/header.component';

@Component({
  selector: 'app-koloreak',
  templateUrl: './koloreak.component.html',
  styleUrls: ['./koloreak.component.scss'],
  imports: [FormsModule, HeaderComponent, MatCardModule, MatSliderModule],
})
export default class KoloreakComponent {
  colorR: WritableSignal<number> = signal<number>(0);
  colorG: WritableSignal<number> = signal<number>(0);
  colorB: WritableSignal<number> = signal<number>(0);
}
