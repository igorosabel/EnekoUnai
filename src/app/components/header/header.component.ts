import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	@Input() leftUrl: string[] = [];
	@Input() leftIcon: string = null;
	@Input() leftTitle: string = null;
	@Input() title: string = 'Eneko y Unai';
	@Input() rightUrl: string[] = [];
	@Input() rightIcon: string = null;
	@Input() rightTitle: string = null;

	constructor() {}
	ngOnInit(): void {}
}
