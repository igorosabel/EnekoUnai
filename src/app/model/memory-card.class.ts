export class MemoryCard {
	public reveal: boolean = false;
	public done: boolean = false;

	constructor(
		public id: number = null,
		public idPerson: number = null,
		public name: string = null
	) {}
}
