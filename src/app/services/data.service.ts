import { Injectable } from '@angular/core';
import { Collegue, Avis, Vote } from '../modele';
import { Source } from 'webpack-sources';
import { Observable, from, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { VoteCompteurComponent } from '../vote-compteur/vote-compteur.component';
import { CollegueComponent } from '../collegue/collegue.component';


const URL_BACKEND = environment.backendUrl;

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // TODO alimenter la liste de collègues
  private voteAjout = new Subject<Vote>();



  get voteAjouter(): Observable<Vote> {
    return this.voteAjout.asObservable();
  }
  private listeCollegues: Collegue[] = [
    // {
    //   photoUrl: "https://i.pinimg.com/originals/39/78/c8/3978c88ee6fe2933568e37e8a8f72061.jpg",
    //   pseudo: 'Neige',
    //   score: 0,
    // },
    // {
    //   photoUrl: "https://www.travelercar.com/wp-content/uploads/2016/04/4a36e314016aa914f203ea6b7d579dc6_large.jpeg",
    //   pseudo: 'Plage',
    //   score: 0,
    // },

    // {
    //   photoUrl: "http://duobjectif.ca/wp-content/uploads/2016/11/Paysages039.jpg",
    //   pseudo: 'Soleil',
    //   score: 0,
    // },
    // {
    //   photoUrl: "https://fr.cdn.v5.futura-sciences.com/buildsv6/images/mediumoriginal/3/6/7/36703a61ed_nodam_2789-1024x768-82a2e.jpg",
    //   pseudo: 'Palmier',
    //   score: 0,
    // },

    // {
    //   photoUrl: "https://e-metropolitain.fr/wp-content/uploads/2017/04/IMGP1469-1024x686.jpg",
    //   pseudo: 'Moureze',
    //   score: 0,
    // },
    // {
    //   photoUrl: "https://www.am-paysage.com/wp-content/uploads/2014/11/paysage1.jpg",
    //   pseudo: 'Pré',
    //   score: 0,
    // },
    // {
    //   photoUrl: "https://sf1.viepratique.fr/wp-content/uploads/sites/5/2017/06/ile-skye-750x410.jpg",
    //   pseudo: 'Chute',
    //   score: 0,
    // },


  ];


  constructor(private _httpClient: HttpClient) {
  }

  lister() {
    if (this.listeCollegues.length > 0) {
      return of(this.listeCollegues);
    } else {
      return this._httpClient.get<Collegue[]>(URL_BACKEND + "/collegues")
        .pipe(
          map(colServeur => colServeur.map(unColServeur => <Collegue>{
            pseudo: unColServeur.pseudo,
            photoUrl: unColServeur.photoUrl,
            score: unColServeur.score
          })),
          tap(tab => {
            this.listeCollegues = tab;
          })
        );
    }
  }

 

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {
    // if (avis == Avis.AIMER) {
    //   collegue.score++;
    // } else if (avis == Avis.DETESTER) {
    //   collegue.score--;
    // }
    // this.voteAjout.next({ collegue: { ...collegue }, avis });
    // return of(collegue);
    return this._httpClient.patch<Collegue>(URL_BACKEND + "/collegues/" + collegue.pseudo, {action: avis}, httpOptions)
    .pipe(
      tap(col => {
        this.voteAjout.next({collegue:col, avis})
      })
    )
  }


  disableButtons(collegue: Collegue, cases: string): boolean {
    if (cases == "like") {
      return collegue.score < 1000;
    } else {
      return collegue.score > -1000;
    }
  }



}