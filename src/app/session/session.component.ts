import { Component, OnInit } from '@angular/core';
import {Deck} from '../deck';
import {SimpleCard} from '../card';
import {ActivatedRoute, Router} from '@angular/router';
import {DeckService} from '../deck.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  deck: Deck;
  currentCard: SimpleCard;
  revealed = false;
  currentIndex = 0;
  scores: Number[] = [0, 1, 2, 3, 4, 5];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deckService: DeckService
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.deckService.getDeckByName(name)
      .subscribe(deck => {
        console.log('ok')
        this.deck = deck
        this.currentCard = this.getCard();
      });
  }
  changeCard(score) {
    this.currentCard.mastery = score;
    this.revealed = false;
    this.currentCard = this.getCard(1);
  }
  toggleReveal() {
    this.revealed = !this.revealed;
  }
  getCard(next = 1) {
    const card = this.deck.cards[this.currentIndex];
    this.currentIndex = Math.abs(this.currentIndex + next) % this.deck.cards.length;
    return card;
  }
  finish() {
    this.deckService.update(this.deck)
      .subscribe( deck => this.router.navigate['/'])
  }

}
