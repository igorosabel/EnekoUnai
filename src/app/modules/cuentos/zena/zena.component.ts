import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { HeaderComponent } from 'src/app/modules/shared/components/header/header.component';

@Component({
  standalone: true,
  selector: 'app-zena',
  templateUrl: './zena.component.html',
  styleUrls: ['./zena.component.scss'],
  imports: [MaterialModule, HeaderComponent],
})
export default class ZenaComponent {}
