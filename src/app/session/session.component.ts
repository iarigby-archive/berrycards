import { Component, Input, OnInit } from '@angular/core';
import {Deck} from '../deck';
import {SimpleCard} from '../card';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  @Input() deck: Deck;
  currentCard: SimpleCard;

  ngOnInit() {
    this.currentCard = this.deck.getCard();
  }

}
