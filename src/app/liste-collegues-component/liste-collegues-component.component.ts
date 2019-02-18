import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../modele';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.css']
})
export class ListeColleguesComponentComponent implements OnInit {

  @Input() collegues: Collegue[];

  pager: any = {};

  // paged items
  pagedItems: any[];


  constructor() { }

  ngOnInit() {
  }
  p: number = 1;
  setPage(p: number) {
    if (p < 1 || p > this.pager.totalPages) {
        return;
    }

  }

}
