import { CommonModule } from '@angular/common';
import {
  Component,
  InputSignal,
  OutputEmitterRef,
  WritableSignal,
  input,
  output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FamiliaInterface } from '@interfaces/interfaces';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSelect,
    MatOption,
    FormsModule,
  ],
})
export default class HeaderComponent {
  leftUrl: InputSignal<string[]> = input<string[]>([]);
  leftIcon: InputSignal<string | null> = input<string | null>(null);
  leftTitle: InputSignal<string | null> = input<string | null>(null);
  title: InputSignal<string> = input<string>('Eneko y Unai');
  rightUrl: InputSignal<string[]> = input<string[]>([]);
  rightIcon: InputSignal<string | null> = input<string | null>(null);
  rightTitle: InputSignal<string | null> = input<string | null>(null);
  aukerak: InputSignal<boolean> = input<boolean>(false);

  aukeraAldatu: OutputEmitterRef<number> = output<number>();

  aukeraZerrenda: FamiliaInterface[] = [
    { id: 1, izena: 'La Casilla' },
    { id: 2, izena: 'Kirikiño' },
    { id: 3, izena: 'Salburua' },
    { id: 4, izena: 'Parlamento' },
    { id: 5, izena: 'Ziordia' },
    { id: 6, izena: 'Autobusak' },
    { id: 7, izena: 'Trenak' },
  ];

  aukeratuta: WritableSignal<number> = signal<number>(1);

  aldatuFamilia(): void {
    this.aukeraAldatu.emit(this.aukeratuta());
  }
}
