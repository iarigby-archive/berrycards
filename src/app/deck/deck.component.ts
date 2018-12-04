import {Component, Input, OnInit} from '@angular/core';
import {Deck} from '../deck';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  @Input() deck: Deck;

  constructor() { }

  ngOnInit() {
  }

}
