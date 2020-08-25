import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { State } from '../../interfaces/interfaces';
import { updateSelectedMovie } from '../../store/actions/movies.actions';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})
export class MovieCardComponent {

  @Input() movie: Movie
  faPaperPlane = faPaperPlane

  constructor(public router:Router, private store: Store<State>) { }
  
  setSelectedMovie(): void {
    this.store.dispatch(updateSelectedMovie({movieId: this.movie.imdbID}))
  }

}
