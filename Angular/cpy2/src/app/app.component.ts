import { Component } from '@angular/core';
import {Hero} from "./hero"


var x = new Hero(1, "alex");

const HEROES: Hero[] = [
  x,
  new Hero(11,'Mr. Nice'),
  new Hero(12,'Narco'),
  new Hero(13, 'Bombasto'),
  new Hero(14,'Celeritas'),
  new Hero(15, 'Magneta'),
  new Hero(16,'RubberMan'),
  { id: 20, name: 'Tornado' },
  new Hero(17, "Dynama"),
  new Hero(13, 'Bombasto'),
  new Hero(15, 'Magneta'),

];

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <hr>
  <div *ngIf="selectedHero">
    <h1> My hero: </h1>
    <h2> {{selectedHero.name}} details </h2>
    <hr>
  </div>

  <h2>My Heroes</h2>
<ul class="heroes">
  <!-- toggle the "special" class on/off with a property -->
  <li *ngFor="let hero of heroes" 
  [class.selected] = "hero === selectedHero"
  (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>


  
  <!--
  <div>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>

  same as 
  <input [value] = "hero.name" //sets input text as the value of the name
  (input) = "hero.name = $event.target.value" >
  -->
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent  { 
  name = 'Angular';
  title = "Tour of Heroes";
  heroes:Hero[] = HEROES;
  selectedHero: Hero;
  randomHero:Hero = this.heroes[0];

  onSelect(hero) {
    this.selectedHero = hero;
  }
}