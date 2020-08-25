import { Component, OnInit, Input } from '@angular/core';
import { ApiService  } from '../../services/api.service';

import { FullMovie, Ratings } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {
  movie:FullMovie = {
    Actors: "",
    Director: "",
    Genre: "",
    Metascore: "",
    Plot: "",
    Poster: "",
    Rated: "",
    Released: "",
    Response: "",
    Title: "",
    Type: "",
    Writer: "",
    Year: "",
    imdbID: "",
    imdbRating: "",
  }
  ratings: Ratings
  @Input() id:string

  constructor(private _api:ApiService) { }

  ngOnInit(): void {
      this._api.getMovieById(this.id)
        .subscribe(result => {
          this.movie = result
          this.setRatings(this.movie.imdbRating, this.movie.Metascore, this.movie.Rated)
        });

  }

  setRatings(imdbRating, metascore, rated): void {
    this.ratings ={ 'imdbRating': {
      value: imdbRating,
      label: 'Imdb'
    }, 'metascore': {
      value: metascore, 
      label: 'Metacritic'
    }, 'rated': {
      value: rated,
      label: 'Rated'
    }}
  }
}
