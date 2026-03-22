export default class MemoryCard {
  cardId: number;
  personId: number;
  name: string;
  img: string;
  reveal: boolean;
  done: boolean;

  constructor(cardId: number, personId: number, name: string, img: string) {
    this.cardId = cardId;
    this.personId = personId;
    this.name = name;
    this.img = img;
    this.reveal = false;
    this.done = false;
  }
}
