import { Component, Signal, inject } from '@angular/core';
import { FireworkParticle } from '@interfaces/firework-particle.interface';
import FireworksService from '@services/fireworks.service';

@Component({
  selector: 'app-fireworks-overlay',
  templateUrl: './fireworks-overlay.component.html',
  styleUrls: ['./fireworks-overlay.component.scss'],
})
export default class FireworksOverlayComponent {
  private readonly fireworks: FireworksService = inject(FireworksService);

  readonly active: Signal<boolean> = this.fireworks.active;
  readonly particles: Signal<FireworkParticle[]> = this.fireworks.particles;
}
