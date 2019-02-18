import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Avis } from '../modele';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Output() avis:EventEmitter<Avis> = new EventEmitter<Avis>();
  @Input () btnLikeActif: true;
  @Input () btnUnlikeActif : true;

  constructor() { }

  ngOnInit() {
  }

  like(){
    this.avis.emit(Avis.AIMER)
  }
  unlike(){
    this.avis.emit(Avis.DETESTER)
  }

  

}
