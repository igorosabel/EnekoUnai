import { Component, OnInit } from '@angular/core';
import { MemoryCard }        from '../../../model/memory-card.class';

@Component({
	selector: 'app-memory',
	templateUrl: './memory.component.html',
	styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {
	level: number = null;
	numCards: number[] = [4, 8, 16];
	cards: MemoryCard[] = [];

	constructor() {}
	ngOnInit(): void {}

	selectLevel(level: number): void {
		this.cards = [];
		for (let i=0; i<this.numCards[level]; i++) {
			this.cards.push(new MemoryCard());
		}
		this.level = level;
	}
}
