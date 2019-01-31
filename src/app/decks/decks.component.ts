import {Component, Input, OnInit} from '@angular/core';
import {Deck} from '../deck';
import {DeckService} from '../deck.service';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.css']
})
export class DecksComponent implements OnInit {

  decks: Deck[];
  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.getDecks();
  }
  getDecks() {
    this.deckService.getDecks().subscribe(
      decks => this.decks = decks
    );
  }
  addDeck(deckName) {
    this.decks.push(new Deck(deckName));
  }
}
