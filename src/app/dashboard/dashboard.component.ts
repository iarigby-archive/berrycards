import { Component, OnInit } from '@angular/core';
import {Deck} from "../deck";
import {DeckService} from "../deck.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  decks: Deck[];
  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.deckService.getDecks()
      .subscribe(decks => this.decks = decks);
  }

  cardsCount() {
    return this.sum(this.decks.map(deck => {return deck.cards.length}))
  }
  averageMastery() {
    let sum = this.sum(this.decks.map(deck =>{
      return this.sum(deck.cards.map(card => {return card.mastery}))
    }));
    return Math.round(sum/this.cardsCount());
  }

  sum(array) {
    return array.reduce(function(a, b) {return a+b})
  }

}
