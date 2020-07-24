import { suits, ranks } from "./constants";

export default class CardDeck {
  constructor() {
    this.cards = [];
    suits.forEach(suit => {
      ranks.forEach(rank => {
        this.cards.push({ suit, rank });
      });
    });
    this.discards = [];
  }

  dealCard() {
    if (this.cards.length === 0) {
      if (this.discards.length === 0) {
        return -1;
      }
      this.cards = [...this.discards];
      this.discards = [];
    }
    const cardIdx = Math.floor(Math.random() * Math.floor(this.cards.length));
    const card = this.cards[cardIdx];
    this.cards.splice(cardIdx, 1);
    return card;
  }

  discardCard(card) {
    this.discards.push(card);
  }

  discardCards(cards) {
    cards.foreach(card => this.discardCard(card));
  }
}
