import { Routes } from '@angular/router';
import { AccueilComponentComponent } from './accueil-component/accueil-component.component';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';

export const routes: Routes = [
    { path: 'accueil', component: AccueilComponentComponent },
    // { path :'collegues/:id', component: }
    { path: 'formulaire', component: NouveauCollegueTemplateFormComponent },
    { path: '', pathMatch: 'full', redirectTo: '/accueil' }, 
];
