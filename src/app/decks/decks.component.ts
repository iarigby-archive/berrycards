import {Component, OnInit} from '@angular/core';
import {Deck} from '../deck';
import {DeckService} from '../deck.service';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.css']
})
export class DecksComponent implements OnInit {

  decks: Deck[];
  constructor(
    private deckService: DeckService
  ) { }

  ngOnInit() {
    this.decks = this.deckService.getDecks();
  }

  addDeck(deckName) {
    this.decks.push(new Deck(deckName));
  }
}
