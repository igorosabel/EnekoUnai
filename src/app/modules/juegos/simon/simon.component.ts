import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/modules/shared/components/header/header.component';

@Component({
  standalone: true,
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.scss'],
  imports: [CommonModule, HeaderComponent],
})
export default class SimonComponent implements OnInit {
  round: number = 1;
  sounds = {};
  activated = {
    red: false,
    green: false,
    blue: false,
    orange: false,
  };
  clickable: boolean = true;
  sequence: string[] = [];
  humanSequence: string[] = [];
  level: number = 0;
  showStart: boolean = true;
  info: string = '';
  showInfo: boolean = false;

  constructor() {}
  ngOnInit(): void {
    this.sounds = {
      red: new Audio('/assets/simon/simonSound1.mp3'),
      green: new Audio('/assets/simon/simonSound2.mp3'),
      blue: new Audio('/assets/simon/simonSound3.mp3'),
      orange: new Audio('/assets/simon/simonSound4.mp3'),
    };
  }

  resetGame(text: string): void {
    alert(text);
    this.sequence = [];
    this.humanSequence = [];
    this.level = 0;
    this.showStart = true;
    this.showInfo = false;
  }

  humanTurn(level: number): void {
    this.info = `Your turn: ${level} Tap${level > 1 ? 's' : ''}`;
  }

  activateTile(color: string): void {
    this.sounds[color].play();
    this.activated[color] = true;

    setTimeout((): void => {
      this.activated[color] = false;
    }, 300);
  }

  playRound(nextSequence: string[]): void {
    nextSequence.forEach((color: string, index: number): void => {
      setTimeout((): void => {
        this.activateTile(color);
      }, (index + 1) * 600);
    });
  }

  nextStep(): string {
    const tiles: string[] = ['red', 'green', 'blue', 'yellow'];
    return tiles[Math.floor(Math.random() * tiles.length)];
  }

  nextRound(): void {
    this.level += 1;

    this.clickable = false;
    this.info = 'Wait for the computer';

    const nextSequence: string[] = [...this.sequence];
    nextSequence.push(this.nextStep());
    this.playRound(nextSequence);

    this.sequence = [...nextSequence];
    setTimeout((): void => {
      this.humanTurn(this.level);
    }, this.level * 600 + 1000);
  }

  handleClick(tile: string): void {
    const index: number = this.humanSequence.push(tile) - 1;
    this.sounds[tile].play();

    const remainingTaps: number =
      this.sequence.length - this.humanSequence.length;

    if (this.humanSequence[index] !== this.sequence[index]) {
      this.resetGame('Oops! Game over, you pressed the wrong tile.');
      return;
    }

    if (this.humanSequence.length === this.sequence.length) {
      if (this.humanSequence.length === 20) {
        this.resetGame('Congrats, You Legend! You completed all the levels');
        return;
      }

      this.humanSequence = [];
      this.info = 'Success! Keep going!';
      setTimeout((): void => {
        this.nextRound();
      }, 1000);
      return;
    }

    this.info = `Your turn: ${remainingTaps} Tap${
      remainingTaps > 1 ? 's' : ''
    }`;
  }

  startGame(): void {
    this.showStart = false;
    this.showInfo = true;
    this.clickable = true;
    this.nextRound();
  }
}
