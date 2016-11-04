import { Component, Input } from '@angular/core'; // on importe les dépendances qui serve à créer des composants (directive) et des formulaires
import { Hero } from './hero';

// On créer un composant (directive)
@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})

//On demande l'export afin qu'elle soit (ré)utilisable
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
