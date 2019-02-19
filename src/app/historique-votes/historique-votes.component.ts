import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Vote } from '../modele';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {
  votes: Vote[] = Array<Vote>();
  constructor(public _data: DataService) { }

  ngOnInit() {
    this._data.voteAjouter.subscribe(
      value =>{
        this.votes.push(value)
        console.log(this.votes)
      } 
      
    )
    
  }
  deleteClient(index: number) {
    console.log(index);
    this.votes.splice(index, 1);
  }
}
