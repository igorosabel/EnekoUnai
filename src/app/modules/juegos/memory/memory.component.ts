import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MemoryLevel, MemoryOption, MemoryPerson } from '@interfaces/memory.interfaces';
import MemoryCard from '@model/memory-card.class';
import { DialogService } from '@osumi/angular-tools';
import HeaderComponent from '@shared/components/header/header.component';
import memoryOptionsData from './memory-options.data';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss'],
  imports: [HeaderComponent, MatCardModule, MatButtonModule],
})
export default class MemoryComponent {
  private readonly dialog: DialogService = inject(DialogService);

  readonly levels: MemoryLevel[] = [
    { id: 0, name: 'Fácil', num: 2, icon: 'easy' },
    { id: 1, name: 'Medio', num: 4, icon: 'medium' },
    { id: 2, name: 'Difícil', num: 8, icon: 'hard' },
  ];

  readonly memoryOptions: MemoryOption[] = memoryOptionsData;

  private readonly _selectedLevel: WritableSignal<MemoryLevel | null> = signal<MemoryLevel | null>(
    null,
  );

  private readonly _selectedOption: WritableSignal<MemoryOption | null> =
    signal<MemoryOption | null>(null);

  private readonly _cards: WritableSignal<MemoryCard[]> = signal<MemoryCard[]>([]);

  readonly selectedLevel: Signal<MemoryLevel | null> = this._selectedLevel.asReadonly();
  readonly selectedOption: Signal<MemoryOption | null> = this._selectedOption.asReadonly();
  readonly cards: Signal<MemoryCard[]> = this._cards.asReadonly();

  readonly boardClass: Signal<string> = computed<string>((): string => {
    const level: MemoryLevel | null = this._selectedLevel();

    if (level === null) {
      return 'card-center card-list';
    }

    return `card-center card-list card-list-${level.num}`;
  });

  private selectedCard: MemoryCard | null = null;
  private selectedSecondCard: MemoryCard | null = null;
  private blocked: boolean = false;
  private timer: number | null = null;

  selectLevel(memoryOption: MemoryOption, level: MemoryLevel): void {
    if (memoryOption.people.length < level.num) {
      this.dialog
        .alert({
          title: 'No disponible',
          content: `La opción "${memoryOption.option}" no tiene suficientes fotos para el nivel "${level.name}".`,
          ok: 'Continuar',
        })
        .subscribe();

      return;
    }

    this.clearPendingTimer();
    this.resetSelectionState();

    const shuffledPeople: MemoryPerson[] = this.shuffle<MemoryPerson>(memoryOption.people);
    const selectedPeople: MemoryPerson[] = shuffledPeople.slice(0, level.num);
    const cards: MemoryCard[] = this.buildCards(selectedPeople);

    this._selectedOption.set(memoryOption);
    this._selectedLevel.set(level);
    this._cards.set(this.shuffle<MemoryCard>(cards));
  }

  show(card: MemoryCard): void {
    if (this.blocked === true || card.done === true || card.reveal === true) {
      return;
    }

    if (this.selectedCard === null) {
      card.reveal = true;
      this.selectedCard = card;
      this.reemitCards();
      return;
    }

    this.blocked = true;
    this.selectedSecondCard = card;
    this.selectedSecondCard.reveal = true;
    this.reemitCards();

    if (this.selectedCard.personId === this.selectedSecondCard.personId) {
      this.selectedCard.done = true;
      this.selectedSecondCard.done = true;

      this.checkWin();
      this.cardsDone();
      return;
    }

    this.timer = window.setTimeout((): void => {
      this.cardsDone();
    }, 1500);
  }

  private buildCards(selectedPeople: MemoryPerson[]): MemoryCard[] {
    const cards: MemoryCard[] = [];
    let cardId: number = 0;

    for (let i: number = 0; i < selectedPeople.length; i++) {
      const person: MemoryPerson = selectedPeople[i];

      cards.push(new MemoryCard(cardId, i, person.name, person.img));
      cardId++;

      cards.push(new MemoryCard(cardId, i, person.name, person.img));
      cardId++;
    }

    return cards;
  }

  private shuffle<T>(items: T[]): T[] {
    const shuffled: T[] = [...items];

    for (let i: number = shuffled.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      const temp: T = shuffled[i];

      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }

    return shuffled;
  }

  private reemitCards(): void {
    this._cards.set([...this._cards()]);
  }

  private cardsDone(): void {
    this.clearPendingTimer();

    if (this.selectedCard !== null && this.selectedCard.done === false) {
      this.selectedCard.reveal = false;
    }

    if (this.selectedSecondCard !== null && this.selectedSecondCard.done === false) {
      this.selectedSecondCard.reveal = false;
    }

    this.selectedCard = null;
    this.selectedSecondCard = null;
    this.blocked = false;

    this.reemitCards();
  }

  private clearPendingTimer(): void {
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  private resetSelectionState(): void {
    this.selectedCard = null;
    this.selectedSecondCard = null;
    this.blocked = false;
  }

  private resetGame(): void {
    this.clearPendingTimer();
    this.resetSelectionState();
    this._cards.set([]);
    this._selectedLevel.set(null);
    this._selectedOption.set(null);
  }

  private checkWin(): void {
    const allDone: boolean =
      this._cards().length > 0 &&
      this._cards().every((card: MemoryCard): boolean => card.done === true);

    if (allDone === true) {
      this.dialog
        .alert({
          title: 'Amaiera',
          content: 'Irabazi duzu! Zorionak!',
          ok: 'Jarraitu',
        })
        .subscribe((): void => {
          this.resetGame();
        });
    }
  }
}
