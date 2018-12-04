import { Component, OnInit } from '@angular/core';
import {Deck} from '../deck';
import {SimpleCard} from '../card';
import {ActivatedRoute} from '@angular/router';
import {DeckService} from '../deck.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  deck: Deck;
  currentCard: SimpleCard;

  constructor(
    private route: ActivatedRoute,
    private deckService: DeckService
  ) { }
  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.deck = this.deckService.getDeckByName(name);
    this.currentCard = this.deck.getCard();
  }

}
