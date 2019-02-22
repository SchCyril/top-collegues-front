import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { CreerCollegue } from '../modele';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  creerCollegue: CreerCollegue = {};


  constructor(private _httpService:DataService) { }

  ngOnInit() {
  }
 
  addCollegue(){
    //console.log(this.creerCollegue)
    this._httpService.addCollegue(this.creerCollegue).subscribe();
  }
}