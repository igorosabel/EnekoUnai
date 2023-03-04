import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

@Component({
  standalone: true,
  selector: 'app-tomasa',
  templateUrl: './tomasa.component.html',
  styleUrls: ['./tomasa.component.scss'],
  imports: [MaterialModule, HeaderComponent],
})
export default class TomasaComponent {}
