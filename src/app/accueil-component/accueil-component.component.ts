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
      photoUrl: "https://fr.cdn.v5.futura-sciences.com/buildsv6/images/mediumoriginal/3/6/7/36703a61ed_nodam_2789-1024x768-82a2e.jpg",
      pseudo: 'Palmier',
      score: 0,
    },

    {
      photoUrl: "https://e-metropolitain.fr/wp-content/uploads/2017/04/IMGP1469-1024x686.jpg",
      pseudo: 'Moureze',
      score: 0,
    },
    {
      photoUrl: "https://www.am-paysage.com/wp-content/uploads/2014/11/paysage1.jpg",
      pseudo: 'Pré',
      score: 0,
    },
    {
      photoUrl: "https://sf1.viepratique.fr/wp-content/uploads/sites/5/2017/06/ile-skye-750x410.jpg",
      pseudo: 'Chute',
      score: 0,
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
