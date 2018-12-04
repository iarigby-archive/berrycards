import {Component, OnInit} from '@angular/core';
import {Deck} from '../deck';
import {DeckService} from '../deck.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  deck: Deck;

  constructor(
    private route: ActivatedRoute,
    private deckService: DeckService
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.deck = this.deckService.getDeckByName(name);
  }

}
