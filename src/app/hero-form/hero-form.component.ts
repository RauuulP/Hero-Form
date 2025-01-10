import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent {

  powers = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"]

  model = new Hero (10, "Dr. IQ", this.powers[0], "Chuck Overstreet")

  submitted = false;

  onSubmit(){
    this.submitted = true
  }

  newHero(){
    this.model = new Hero(15, '', '')
  }

  skyDog(): Hero {
    const myHero = new Hero(15, 'SkyDog', 'Fetch any object at any distance', 'Leslie Rollover')
    console.log('My hero is called ' + myHero.name)
    return myHero;
  }
}