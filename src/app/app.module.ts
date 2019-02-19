import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { BonjourComponent } from './bonjour/bonjour.component';
import { BonjourAvecPrenomComponent } from './bonjour-avec-prenom/bonjour-avec-prenom.component';
import { CollegueComponent } from './collegue/collegue.component';
import { AvisComponent } from './avis/avis.component';
import { ListeColleguesComponentComponent } from './liste-collegues-component/liste-collegues-component.component';
import { AccueilComponentComponent } from './accueil-component/accueil-component.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { VoteCompteurComponent } from './vote-compteur/vote-compteur.component';

@NgModule({
  declarations: [
    AppComponent,
    BonjourComponent,
    BonjourAvecPrenomComponent,
    CollegueComponent,
    AvisComponent,
    ListeColleguesComponentComponent,
    AccueilComponentComponent,
    HistoriqueVotesComponent,
    VoteCompteurComponent,
    
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
