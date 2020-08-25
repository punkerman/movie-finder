import { Component, OnInit } from '@angular/core';
import { ApiService  } from '../../services/api.service';
import { Store } from '@ngrx/store';
import { Movie, SearchRestults, State, MoviesState } from '../../interfaces/interfaces';



@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.sass']
})
export class ResultsTableComponent implements OnInit {

  movies: Movie[] = []
  search$: string = ''
  currPage: number = 1
  totalPages:number = 1
  noMoviesFound: boolean = false

  constructor(private _api:ApiService, private store: Store<MoviesState>) { }

  ngOnInit(): void {
    this.store.select(state => state.moviesReducer)
    .subscribe(newState => {
      this.currPage = newState.currentPage;
      this.updateMoviesList(newState.search);
      });
  }

  updateMoviesList(search: string): void {
    search.length > 2
    ? this._api.getMoviesByTitle(search, this.currPage)
      .subscribe((data:SearchRestults) => {
        data.Response === "True"
        ? this.setMovies(data.Search)
        : this.setError()
        this.setTotalPages(parseInt(data.totalResults))
      })
    : this.cleanList();
  }

  setTotalPages(totalResults: number):void {
    this.totalPages = Math.ceil(totalResults / 10)
  }

  setMovies(newMovies: Movie[]):void {
    this.noMoviesFound = false
    this.movies = newMovies;
  }

  cleanList():void {
    this.currPage = 1
    this.movies = []
    this.setTotalPages(1)
    this.noMoviesFound = false
  }

  setError():void {
    this.noMoviesFound = true 
  }

}
