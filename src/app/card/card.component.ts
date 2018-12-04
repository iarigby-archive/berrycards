import {Component, Input, OnInit} from '@angular/core';
import {SimpleCard} from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: SimpleCard;
  revealed = false;
  constructor() { }

  ngOnInit() {
  }
  toggleReveal() {
    this.revealed = !this.revealed;
  }

}
