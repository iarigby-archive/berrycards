import {Component, Input, OnInit} from '@angular/core';
import {SimpleCard} from '../card';
import {Deck} from '../deck';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() currentDeck: Deck;
  constructor() { }

  ngOnInit() {
  }
  addCard(question, answer) {
    this.currentDeck.cards.push(new SimpleCard(question, answer, {"name":"none"}));
  }

}
