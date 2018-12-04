import {Component, Input, OnInit} from '@angular/core';
import {Deck} from '../deck';

@Component({
  selector: 'app-deck-preview',
  templateUrl: './deck-preview.component.html',
  styleUrls: ['./deck-preview.component.css']
})
export class DeckPreviewComponent implements OnInit {
  @Input() deck: Deck;
  constructor() { }

  ngOnInit() {
  }

}
