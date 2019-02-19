import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  constructor(public _data: DataService) { }

  ngOnInit() {
  }
  deleteClient(index : number){
    console.log(index);
    this._data.deleteClient(index);
  }
}
