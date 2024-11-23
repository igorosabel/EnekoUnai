import { CommonModule } from '@angular/common';
import { Component, InputSignal, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
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
}
