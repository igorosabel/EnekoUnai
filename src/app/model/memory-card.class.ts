export default class MemoryCard {
  public reveal: boolean = false;
  public done: boolean = false;

  constructor(
    public id: number | null = null,
    public idPerson: number | null = null,
    public name: string | null = null
  ) {}
}
