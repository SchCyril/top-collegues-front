import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  matricule: string;
  pseudo: string;
  imgUrl: string


  constructor() { }

  ngOnInit() {
  }
 

}