import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SessionComponent} from './session/session.component';
import {DeckComponent} from './deck/deck.component';
import {DecksComponent} from './decks/decks.component';

const routes: Routes = [
  { path: 'practice/:name', component: SessionComponent },
  { path: 'deck/:name', component: DeckComponent},
  { path: 'decks', component: DecksComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
