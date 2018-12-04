import { Injectable } from '@angular/core';
import {Deck} from './deck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  decks: Deck[] = [new Deck('a')];
  constructor() { }

  getDecks() {return this.decks; }
  getDeckByName(name) {
    return this.decks.find(x => x.name === name);
  }
}
