import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import FireworksOverlayComponent from '@shared/components/fireworks/fireworks-overlay.component';

@Component({
  selector: 'app-root',
  template: `<router-outlet /><app-fireworks-overlay />`,
  imports: [RouterModule, FireworksOverlayComponent],
})
export default class AppComponent {}
