import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MemoryLevel } from '@interfaces/memory.interfaces';
import MemoryCard from '@model/memory-card.class';
import HeaderComponent from '@shared/components/header/header.component';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss'],
  imports: [HeaderComponent, MatCardModule, MatButtonModule],
})
export default class MemoryComponent {
  levels: MemoryLevel[] = [
    { id: 0, name: 'Fácil', num: 2, icon: 'easy' },
    { id: 1, name: 'Medio', num: 4, icon: 'medium' },
    { id: 2, name: 'Difícil', num: 8, icon: 'hard' },
  ];
  selectedLevel: MemoryLevel | null = null;
  cards: MemoryCard[] = [];
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
  timer: number = 0;

  shuffle(array: MemoryCard[]): MemoryCard[] {
    return array.sort((): number => Math.random() - 0.5);
  }

  selectLevel(level: MemoryLevel): void {
    this.cards = [];
    const min: number = 0;
    const max: number = this.people.length - 1;
    let idPerson: number = 0;
    while (this.selectedPeople.length < level.num) {
      const random: number = Math.floor(Math.random() * (max - min + 1) + min);
      if (this.selectedPeople.indexOf(random) === -1) {
        idPerson++;
        this.cards.push(new MemoryCard(random, idPerson, this.people[random]));
        idPerson++;
        this.cards.push(new MemoryCard(random, idPerson, this.people[random]));
        this.selectedPeople.push(random);
      }
    }
    this.cards = this.shuffle(this.cards);
    this.selectedLevel = level;
  }

  cardsDone(): void {
    if (this.timer !== null) {
      clearTimeout(this.timer);
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
  }

  show(card: MemoryCard): void {
    if (this.blocked) {
      return;
    }
    if (this.selectedCard === null) {
      card.reveal = true;
      this.selectedCard = card;
    } else {
      if (this.selectedCard.idPerson === card.idPerson) {
        return;
      }
      this.blocked = true;
      this.selectedSecondCard = card;
      this.selectedSecondCard.reveal = true;
      if (this.selectedCard.id === this.selectedSecondCard.id) {
        this.selectedCard.done = true;
        card.done = true;
        this.cardsDone();
      } else {
        this.timer = window.setTimeout((): void => {
          this.cardsDone();
        }, 1500);
      }
    }
  }
}
