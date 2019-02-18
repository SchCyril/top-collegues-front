import { Component } from '@angular/core';
import { Collegue } from './modele';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  
    
    
})
export class AppComponent {
  title = 'top-collegue-front';
  unCollegue: Collegue = {
    photoUrl: "https://www.terravoyages.com/upload/les_plus_beaux_lacs_du_monde_lago_toree_argentine1-1024x660.jpg",
    pseudo: 'Cyril',
    score: 0,

  };

  
}

