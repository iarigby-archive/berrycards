import {SimpleCard} from './card';

export class Deck {
  name: string;
  cards: SimpleCard[] = [];
  currentIndex = 0;
  constructor(name) {
    this.name = name;
  }
  getCard(next = 1) {
    const card = this.cards[this.currentIndex];
    console.log(this.currentIndex);
    this.currentIndex = Math.abs(this.currentIndex + next) % this.cards.length;
    return card;
  }
}

export class Topic {
  name: string;
  subtopics: SubTopic[] = [new SubTopic('other')];

  constructor(name) {
    this.name = name;
  }
  addSubtopic(subtopic) {
    this.subtopics.push(subtopic);
    return this;
  }
}

export class SubTopic {
  name: string;
  constructor(name) {
    this.name = name;
  }
}
