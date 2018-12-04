import { Component } from '@angular/core';
import {Deck} from './deck';
import {SimpleCard} from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  decks: Deck[] = [new Deck('a')];
  currentDeck;
  addDeck(deckName) {
    this.decks.push(new Deck(deckName));
  }
  addCard(question, answer) {
    this.currentDeck.cards.push(new SimpleCard(question, answer));
  }
}
