import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-simon',
	templateUrl: './simon.component.html',
	styleUrls: ['./simon.component.scss']
})
export class SimonComponent implements OnInit {
	round: number = 1;
	sounds = {};

	constructor() {}
	ngOnInit(): void {
		this.sounds = {
			red: new Audio('/assets/simon/simonSound1.mp3'),
			green: new Audio('/assets/simon/simonSound2.mp3'),
			blue: new Audio('/assets/simon/simonSound3.mp3'),
			orange: new Audio('/assets/simon/simonSound4.mp3')
		};
	}

	sequence = [];
	humanSequence = [];
	level: number = 0;
	showStart: boolean = true;
	info: string = '';

	resetGame(text): void {
		alert(text);
		this.sequence = [];
		this.humanSequence = [];
		this.level = 0;
		this.showStart = true;
	}

	humanTurn(level: number): void {
		this.info = `Your turn: ${level} Tap${level > 1 ? 's' : ''}`;
	}

	activateTile(color: string): void {
	  const tile = document.querySelector(`[data-tile='${color}']`);
	  const sound = document.querySelector(`[data-sound='${color}']`);

	  tile.classList.add('activated');
	  sound.play();

	  setTimeout(() => {
		tile.classList.remove('activated');
	  }, 300);
	}

	function playRound(nextSequence) {
	  nextSequence.forEach((color, index) => {
		setTimeout(() => {
		  activateTile(color);
		}, (index + 1) * 600);
	  });
	}

	function nextStep() {
	  const tiles = ['red', 'green', 'blue', 'yellow'];
	  const random = tiles[Math.floor(Math.random() * tiles.length)];

	  return random;
	}

	function nextRound() {
	  level += 1;

	  tileContainer.classList.add('unclickable');
	  info.textContent = 'Wait for the computer';
	  heading.textContent = `Level ${level} of 20`;

	  const nextSequence = [...sequence];
	  nextSequence.push(nextStep());
	  playRound(nextSequence);

	  sequence = [...nextSequence];
	  setTimeout(() => {
		humanTurn(level);
	  }, level * 600 + 1000);
	}

	function handleClick(tile) {
	  const index = humanSequence.push(tile) - 1;
	  const sound = document.querySelector(`[data-sound='${tile}']`);
	  sound.play();

	  const remainingTaps = sequence.length - humanSequence.length;

	  if (humanSequence[index] !== sequence[index]) {
		return resetGame('Oops! Game over, you pressed the wrong tile.');
	  }

	  if (humanSequence.length === sequence.length) {
		if (humanSequence.length === 20) {
		  return resetGame('Congrats, You Legend! You completed all the levels');
		}

		humanSequence = [];
		info.textContent = 'Success! Keep going!';
		setTimeout(() => {
		  nextRound();
		}, 1000);
		return;
	  }

	  info.textContent = `Your turn: ${remainingTaps} Tap${
		remainingTaps > 1 ? 's' : ''
	  }`;
	}

	function startGame() {
	  startButton.classList.add('hidden');
	  info.classList.remove('hidden');
	  tileContainer.classList.remove('unclickable');
	  nextRound();
	}

	startButton.addEventListener('click', startGame);
	tileContainer.addEventListener('click', event => {
	  const { tile } = event.target.dataset;

	  if (tile) handleClick(tile);
	});
}
