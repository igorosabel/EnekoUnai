import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { FireworkParticle } from '@interfaces/firework-particle.interface';

@Injectable({
  providedIn: 'root',
})
export default class FireworksService {
  private readonly colors: string[] = [
    '#ff00ff',
    '#00ffff',
    '#39ff14',
    '#ffff00',
    '#ff5f1f',
    '#ff003c',
    '#7d00ff',
    '#00ff85',
    '#ffffff',
  ];

  private readonly _active: WritableSignal<boolean> = signal<boolean>(false);
  private readonly _particles: WritableSignal<FireworkParticle[]> = signal<FireworkParticle[]>([]);

  readonly active: Signal<boolean> = this._active.asReadonly();
  readonly particles: Signal<FireworkParticle[]> = this._particles.asReadonly();

  private hideTimer: number | null = null;
  private pendingResolve: (() => void) | null = null;
  private nextId: number = 0;

  play(duration: number = 2500, burstCount: number = 6): Promise<void> {
    this.stop();

    const particles: FireworkParticle[] = this.createParticles(burstCount);

    this._particles.set(particles);
    this._active.set(true);

    return new Promise<void>((resolve: () => void): void => {
      this.pendingResolve = resolve;

      this.hideTimer = window.setTimeout((): void => {
        this.hideTimer = null;
        this.finish();
      }, duration);
    });
  }

  stop(): void {
    if (this.hideTimer !== null) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }

    this.finish();
  }

  private finish(): void {
    this._active.set(false);
    this._particles.set([]);

    if (this.pendingResolve !== null) {
      const resolve: () => void = this.pendingResolve;

      this.pendingResolve = null;
      resolve();
    }
  }

  private createParticles(burstCount: number): FireworkParticle[] {
    const particles: FireworkParticle[] = [];

    for (let burstIndex: number = 0; burstIndex < burstCount; burstIndex++) {
      const originX: number = 18 + Math.random() * 64;
      const originY: number = 15 + Math.random() * 35;
      const delay: number = burstIndex * 280;
      const particleCount: number = 18 + Math.floor(Math.random() * 8);

      for (let i: number = 0; i < particleCount; i++) {
        const angle: number = (Math.PI * 2 * i) / particleCount;
        const distance: number = 40 + Math.random() * 70;
        const dx: number = Math.cos(angle) * distance;
        const dy: number = Math.sin(angle) * distance;
        const size: number = 5 + Math.floor(Math.random() * 7);
        const duration: number = 700 + Math.floor(Math.random() * 500);
        const color: string = this.colors[Math.floor(Math.random() * this.colors.length)];

        particles.push({
          id: this.nextId++,
          originX,
          originY,
          dx,
          dy,
          size,
          delay,
          duration,
          color,
        });
      }
    }

    return particles;
  }
}
