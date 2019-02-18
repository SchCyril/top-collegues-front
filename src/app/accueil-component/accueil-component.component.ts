import { Component, OnInit } from '@angular/core';
import { Collegue } from '../modele';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.css']
})
export class AccueilComponentComponent implements OnInit {
  listeCollegue: Collegue[] = [
    {
      photoUrl: "https://i.pinimg.com/originals/39/78/c8/3978c88ee6fe2933568e37e8a8f72061.jpg",
      pseudo: 'Neige',
      score: 0,
    },
    {
      photoUrl: "https://www.travelercar.com/wp-content/uploads/2016/04/4a36e314016aa914f203ea6b7d579dc6_large.jpeg",
      pseudo: 'Plage',
      score: 0,
    },

    {
      photoUrl: "http://duobjectif.ca/wp-content/uploads/2016/11/Paysages039.jpg",
      pseudo: 'Soleil',
      score: 0,
    },
    {
      photoUrl: "https://www.terravoyages.com/upload/les_plus_beaux_lacs_du_monde_lago_toree_argentine1-1024x660.jpg",
      pseudo: 'Soleil',
      score: 0,
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
