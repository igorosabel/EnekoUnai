import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/modules/material/material.module';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, MaterialModule, RouterModule],
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
