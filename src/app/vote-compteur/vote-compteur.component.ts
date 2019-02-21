import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Vote } from '../modele';

@Component({
  selector: 'app-vote-compteur',
  templateUrl: './vote-compteur.component.html',
  styleUrls: ['./vote-compteur.component.css']
})
export class VoteCompteurComponent implements OnInit {

  vote: Vote[] = Array<Vote>();

  constructor(private _data: DataService) { }

  ngOnInit() {
    if(localStorage.getItem("compteurVote") != null){
      this.vote = JSON.parse(localStorage.getItem("compteurVote"))
    }

    this._data.voteAjouter.subscribe(
      value => {
        this.vote.push(value);
        localStorage.setItem("compteurVote", JSON.stringify(this.vote));
    
      },
      err => console.log(err));
    }
  

}
