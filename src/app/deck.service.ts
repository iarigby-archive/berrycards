import { Injectable } from '@angular/core';
import {Deck} from './deck';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  decks: Deck[] = [];
  // private backendUrl = 'https://berrycards.herokuapp.com/healthCheck';
  private backendUrl = 'http://localhost:9000';

  constructor(private http: HttpClient) {
    this.getDecks()
      .subscribe(decks => {
        this.decks = decks
      })
  }

  // don't need to check server for deck content all the time
  getDecks(): Observable<Deck[]> {
    return this.http.get<Deck[]>(this.backendUrl + '/decks');
  }

  getDeckByName(name) {
    return this.http.get<Deck>(this.backendUrl + '/deck?name=' + name);
  }

  update(deck: Deck) {
    return this.http.post<String>(this.backendUrl + '/updateDeck', deck, httpOptions)
  }


}
