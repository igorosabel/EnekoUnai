import { Component, inject, signal, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MemoryLevel } from '@interfaces/memory.interfaces';
import MemoryCard from '@model/memory-card.class';
import { DialogService } from '@osumi/angular-tools';
import HeaderComponent from '@shared/components/header/header.component';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss'],
  imports: [HeaderComponent, MatCardModule, MatButtonModule],
})
export default class MemoryComponent {
  private readonly dialog: DialogService = inject(DialogService);

  private readonly _levels: WritableSignal<MemoryLevel[]> = signal<MemoryLevel[]>([
    { id: 0, name: 'Fácil', num: 2, icon: 'easy' },
    { id: 1, name: 'Medio', num: 4, icon: 'medium' },
    { id: 2, name: 'Difícil', num: 8, icon: 'hard' },
  ]);
  private readonly _selectedLevel: WritableSignal<MemoryLevel | null> = signal<MemoryLevel | null>(
    null
  );
  private readonly _cards: WritableSignal<MemoryCard[]> = signal<MemoryCard[]>([]);

  get levels(): MemoryLevel[] {
    return this._levels();
  }
  get selectedLevel(): MemoryLevel | null {
    return this._selectedLevel();
  }
  get cards(): MemoryCard[] {
    return this._cards();
  }

  people: string[] = [
    'Aita',
    'Ama',
    'Abuela',
    'Abuelo',
    'Izeko Amaia',
    'Amama',
    'Aitxitxa',
    'Tia Piti',
    'Tio Imanol',
    'Tia Eider',
    'Tia Itxi',
  ];
  selectedPeople: number[] = [];
  selectedCard: MemoryCard | null = null;
  selectedSecondCard: MemoryCard | null = null;
  blocked: boolean = false;
  timer: number | null = null;

  shuffle(array: MemoryCard[]): MemoryCard[] {
    return array.sort((): number => Math.random() - 0.5);
  }

  selectLevel(level: MemoryLevel): void {
    const cards: MemoryCard[] = [];
    const min: number = 0;
    const max: number = this.people.length - 1;

    let idPerson: number = 0;
    while (this.selectedPeople.length < level.num) {
      const random: number = Math.floor(Math.random() * (max - min + 1) + min);
      if (this.selectedPeople.indexOf(random) === -1) {
        idPerson++;
        cards.push(new MemoryCard(random, idPerson, this.people[random]));
        idPerson++;
        cards.push(new MemoryCard(random, idPerson, this.people[random]));
        this.selectedPeople.push(random);
      }
    }

    const shuffled: MemoryCard[] = this.shuffle(cards);
    this._cards.set(shuffled);
    this._selectedLevel.set(level);

    // reset de selección/bloqueo como en tu flujo
    this.selectedCard = null;
    this.selectedSecondCard = null;
    this.blocked = false;
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  private reemitCards(): void {
    // Re-emite nueva referencia de array para notificar en zoneless
    this._cards.set(this._cards().slice());
  }

  private cardsDone(): void {
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.selectedCard !== null && !this.selectedCard.done) {
      this.selectedCard.reveal = false;
    }
    if (this.selectedSecondCard !== null && !this.selectedSecondCard.done) {
      this.selectedSecondCard.reveal = false;
    }
    this.selectedCard = null;
    this.selectedSecondCard = null;
    this.blocked = false;

    // ← importante en zoneless
    this.reemitCards();
  }

  show(card: MemoryCard): void {
    if (this.blocked) return;

    if (this.selectedCard === null) {
      // primera carta
      card.reveal = true;
      this.selectedCard = card;
      this.reemitCards(); // notifica giro
      return;
    }

    // si haces click en la misma "persona" (par ya girado), ignoramos
    if (this.selectedCard.idPerson === card.idPerson) {
      return;
    }

    // segunda carta
    this.blocked = true;
    this.selectedSecondCard = card;
    this.selectedSecondCard.reveal = true;
    this.reemitCards(); // notifica segundo giro

    // pareja correcta
    if (this.selectedCard.id === this.selectedSecondCard.id) {
      this.selectedCard.done = true;
      card.done = true;
      this.checkWin();
      this.cardsDone(); // hará reemit
      return;
    }

    // pareja incorrecta → ocultar tras delay
    this.timer = window.setTimeout((): void => {
      this.cardsDone(); // hará flip atrás + reemit
    }, 1500);
  }

  private checkWin(): void {
    const allDone: boolean =
      this._cards().length > 0 && this._cards().every((c: MemoryCard): boolean => c.done);
    if (allDone) {
      this.dialog.alert({
        title: 'Fin',
        content: '¡Has ganado!',
        ok: 'Continuar',
      });
    }
  }
}
