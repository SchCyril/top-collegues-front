import { Component, OnInit } from '@angular/core';
import { Collegue } from '../modele';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.css']
})
export class AccueilComponentComponent implements OnInit {
  
  constructor(public _data: DataService) {  }

  ngOnInit() {
  }
  refresh(): void {
    window.location.reload();
}

}
