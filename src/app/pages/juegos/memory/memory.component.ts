import { Component, OnInit } from '@angular/core';
import { MemoryCard }        from '../../../model/memory-card.class';
import { MemoryLevel }       from '../../../interfaces/interfaces';

@Component({
	selector: 'app-memory',
	templateUrl: './memory.component.html',
	styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {
	levels: MemoryLevel[] = [
		{id: 0, name: 'Fácil', num: 2},
		{id: 1, name: 'Medio', num: 4},
		{id: 2, name: 'Difícil', num: 8}
	];
	selectedLevel: MemoryLevel = null;
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
		'Tia Itxi'
	];
	selectedPeople: number[] = [];

	constructor() {}
	ngOnInit(): void {}

	shuffle(array) {
		return array.sort(() => Math.random() - 0.5);
	}

	selectLevel(level: MemoryLevel): void {
		this.cards = [];
		const min = 0;
		const max = this.people.length;
		while (this.selectedPeople.length<level.num) {
			let random = Math.floor(Math.random()*(max-min+1)+min);
			if (this.selectedPeople.indexOf(random)===-1) {
				this.cards.push(new MemoryCard(random, this.people[random]));
				this.cards.push(new MemoryCard(random, this.people[random]));
				this.selectedPeople.push(random);
			}
		}
		this.cards = this.shuffle(this.cards);
		this.selectedLevel = level;
	}

	show(card: MemoryCard): void {
		card.reveal = !card.reveal;
	}
}
