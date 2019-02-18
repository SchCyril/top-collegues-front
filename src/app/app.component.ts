import { Component } from '@angular/core';
import { Collegue } from './modele';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonjour-angular';
  unCollegue : Collegue =  {
    photoUrl : "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg",
    pseudo : 'Cyril',
    score : 0, 
    
  }
   

    
  
  
 
}
  
