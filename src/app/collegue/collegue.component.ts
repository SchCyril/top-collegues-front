import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../modele';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css'],

})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;
  likeActif = true;
  unLikeActif = true;

  constructor(private _data:DataService) { }

  ngOnInit() {
    this.likeActif = this._data.disableButtons(this.collegue, "like");
    this.unLikeActif = this._data.disableButtons(this.collegue, "unlike");
  }

  vote(avis: Avis) {
    
    this._data.donnerUnAvis(this.collegue, avis);
    this.likeActif = this._data.disableButtons(this.collegue, "like");
    this.unLikeActif = this._data.disableButtons(this.collegue, "unlike");


  }
  // gererActivationBouton() {
  //   this.likeActif = this.collegue.score < 10;
  //   this.unLikeActif = this.collegue.score > -10;

  // }


}
