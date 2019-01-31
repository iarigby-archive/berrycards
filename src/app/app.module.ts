import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DeckComponent } from './deck/deck.component';
import { SessionComponent } from './session/session.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DecksComponent } from './decks/decks.component';
import { CardsComponent } from './cards/cards.component';
import { DeckPreviewComponent } from './deck-preview/deck-preview.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DeckComponent,
    SessionComponent,
    DecksComponent,
    CardsComponent,
    DeckPreviewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
