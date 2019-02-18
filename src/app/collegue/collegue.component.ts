import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../modele';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css'],

})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;
likeActif = true;
unLikeActif = true;

  constructor() { }

  ngOnInit() {
    this.gererActivationBouton();
  }

  vote(avis: Avis) {
    if (avis === Avis.AIMER) {
      this.collegue.score++;
    } else if (avis === Avis.DETESTER) {
      this.collegue.score--;
    }
this.gererActivationBouton();
  
    
  }
  gererActivationBouton() {
    this.likeActif = this.collegue.score < 10;
    this.unLikeActif = this.collegue.score > -10;

  }


}
