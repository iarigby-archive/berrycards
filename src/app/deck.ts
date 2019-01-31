import {SimpleCard} from './card';

export class Deck {
  name: string;
  cards: SimpleCard[] = [];
  constructor(name) {
    this.name = name;
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
