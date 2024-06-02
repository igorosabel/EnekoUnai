import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  SimonActivated,
  SimonColor,
  SimonSounds,
} from '@interfaces/interfaces';
import HeaderComponent from '@shared/components/header/header.component';

@Component({
  standalone: true,
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.scss'],
  imports: [CommonModule, HeaderComponent],
})
export default class SimonComponent {
  round: number = 1;
  sounds: SimonSounds = {
    red: new Audio('/simon/simonSound1.mp3'),
    green: new Audio('/simon/simonSound2.mp3'),
    blue: new Audio('/simon/simonSound3.mp3'),
    orange: new Audio('/simon/simonSound4.mp3'),
  };
  activated: SimonActivated = {
    red: false,
    green: false,
    blue: false,
    orange: false,
  };
  clickable: boolean = true;
  sequence: SimonColor[] = [];
  humanSequence: string[] = [];
  level: number = 0;
  showStart: boolean = true;
  info: string = '';
  showInfo: boolean = false;

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

  activateTile(color: SimonColor): void {
    this.sounds[color]?.play();
    this.activated[color] = true;

    setTimeout((): void => {
      this.activated[color] = false;
    }, 300);
  }

  playRound(nextSequence: SimonColor[]): void {
    nextSequence.forEach((color: SimonColor, index: number): void => {
      setTimeout((): void => {
        this.activateTile(color);
      }, (index + 1) * 600);
    });
  }

  nextStep(): SimonColor {
    const tiles: SimonColor[] = ['red', 'green', 'blue', 'orange'];
    return tiles[Math.floor(Math.random() * tiles.length)];
  }

  nextRound(): void {
    this.level += 1;

    this.clickable = false;
    this.info = 'Wait for the computer';

    const nextSequence: SimonColor[] = [...this.sequence];
    nextSequence.push(this.nextStep());
    this.playRound(nextSequence);

    this.sequence = [...nextSequence];
    setTimeout((): void => {
      this.humanTurn(this.level);
    }, this.level * 600 + 1000);
  }

  handleClick(tile: SimonColor): void {
    const index: number = this.humanSequence.push(tile) - 1;
    this.sounds[tile]?.play();

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
