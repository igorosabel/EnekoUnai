import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule],
  exports: [MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule],
})
export class MaterialModule {}
