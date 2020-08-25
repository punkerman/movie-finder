import { Component, OnInit, Input } from '@angular/core';
import { Ratings } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.sass']
})
export class RatingsComponent{

  @Input() ratings: Ratings

  imbdColor: string
  metacriticColor: string
  colors = {
    green: '#77ce25',
    yellow: '#f0e54e',
    red: '#e93e3e'
  }

  constructor() { }

  ngOnChanges(): void {
    this.setImdbColor();
    this.setMetacriticColor();
  }

  setImdbColor(): void {
    const imdbScore = parseInt(this.ratings?.imdbRating.value)
    this.imbdColor = this.getColor(imdbScore, 1);
    
  }

  setMetacriticColor(): void {
    const metacriticScore = parseInt(this.ratings?.metascore.value)
    
    this.metacriticColor = this.getColor(metacriticScore, 10);
  }

  getColor(value: number, base: number): string {
    if (value > (7.0 * base)) {
     return this.colors.green
    } else if (value >(4.5 *  base)) {
      return this.colors.yellow
    } else  return this.colors.red
  }

}
