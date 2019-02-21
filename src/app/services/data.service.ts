import { Injectable } from '@angular/core';
import { Collegue, Avis, Vote } from '../modele';
import { Source } from 'webpack-sources';
import { Observable, from, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from 'selenium-webdriver/http';


const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // TODO alimenter la liste de collègues
  private voteAjout = new Subject<Vote>();

   get voteAjouter():Observable<Vote> {
     return this.voteAjout.asObservable();
   }
  private listeCollegues: Collegue[] = [
    {
      photoUrl: "https://i.pinimg.com/originals/39/78/c8/3978c88ee6fe2933568e37e8a8f72061.jpg",
      pseudo: 'Neige',
      score: 0,
    },
    {
      photoUrl: "https://www.travelercar.com/wp-content/uploads/2016/04/4a36e314016aa914f203ea6b7d579dc6_large.jpeg",
      pseudo: 'Plage',
      score: 0,
    },

    {
      photoUrl: "http://duobjectif.ca/wp-content/uploads/2016/11/Paysages039.jpg",
      pseudo: 'Soleil',
      score: 0,
    },
    {
      photoUrl: "https://fr.cdn.v5.futura-sciences.com/buildsv6/images/mediumoriginal/3/6/7/36703a61ed_nodam_2789-1024x768-82a2e.jpg",
      pseudo: 'Palmier',
      score: 0,
    },

    {
      photoUrl: "https://e-metropolitain.fr/wp-content/uploads/2017/04/IMGP1469-1024x686.jpg",
      pseudo: 'Moureze',
      score: 0,
    },
    {
      photoUrl: "https://www.am-paysage.com/wp-content/uploads/2014/11/paysage1.jpg",
      pseudo: 'Pré',
      score: 0,
    },
    {
      photoUrl: "https://sf1.viepratique.fr/wp-content/uploads/sites/5/2017/06/ile-skye-750x410.jpg",
      pseudo: 'Chute',
      score: 0,
    },


  ];


  //  private listeVotes: Vote[] = [
  // //   // {
  // //   //   collegue: this.listeCollegues[0],
  // //   //   avis: Avis.AIMER
  // //   // },
  // //   // {
  // //   //   collegue: this.listeCollegues[1],
  // //   //   avis: Avis.DETESTER
  // //   // }

  //  ];



  constructor() {
  }

  lister(): Observable<Collegue[]> {

    return of(this.listeCollegues);
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {
    if (avis == Avis.AIMER) {
      collegue.score++;
    } else if (avis == Avis.DETESTER) {
      collegue.score--;
    }
    this.voteAjout.next({ collegue : {...collegue}, avis });
    return of(collegue);
  }

  disableButtons(collegue: Collegue, cases: string): boolean {
    if (cases == "like") {
      return collegue.score < 10;
    } else {
      return collegue.score > -10;
    }
  }
}