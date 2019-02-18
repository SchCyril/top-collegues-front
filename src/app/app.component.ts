import { Component } from '@angular/core';
import { Collegue } from './modele';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegue-front';
  unCollegue : Collegue =  {
    photoUrl : "https://nighthelper.com/wp-content/uploads/2016/03/nature_waterfall_summer_lake_trees_90400_3840x2160.jpg",
    pseudo : 'Cyril',
    score : 0, 
    
  }
   

    
  
  
 
}
  
