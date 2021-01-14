import { Component, OnInit, Input } from '@angular/core';
import { MemoryCard }               from '../../model/memory-card.class';

@Component({
	selector: 'app-memory-card',
	templateUrl: './memory-card.component.html',
	styleUrls: ['./memory-card.component.scss']
})
export class MemoryCardComponent implements OnInit {
	@Input() card: MemoryCard = null;

	constructor() {}
	ngOnInit(): void {}
}
