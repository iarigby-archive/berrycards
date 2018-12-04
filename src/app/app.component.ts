import { Component } from '@angular/core';
import {Deck} from './deck';
import {DeckService} from './deck.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  decks: Deck[] = this.deckService.getDecks();
  constructor(
    private deckService: DeckService
  ) {}
}
