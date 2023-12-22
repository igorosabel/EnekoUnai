import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

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
  ],
})
export class HeaderComponent {
  @Input() leftUrl: string[] = [];
  @Input() leftIcon: string = null;
  @Input() leftTitle: string = null;
  @Input() title: string = 'Eneko y Unai';
  @Input() rightUrl: string[] = [];
  @Input() rightIcon: string = null;
  @Input() rightTitle: string = null;
}
