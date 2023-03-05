import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { HeaderComponent } from 'src/app/modules/shared/components/header/header.component';

@Component({
  standalone: true,
  selector: 'app-koloreak',
  templateUrl: './koloreak.component.html',
  styleUrls: ['./koloreak.component.scss'],
  imports: [CommonModule, MaterialModule, FormsModule, HeaderComponent],
})
export default class KoloreakComponent {
  colorR: number = 0;
  colorG: number = 0;
  colorB: number = 0;
}
