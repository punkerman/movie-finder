import { Component, OnInit } from '@angular/core';
import { State, MoviesState } from '../../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


import { clear, update } from '../../store/actions/movies.actions';

import { Movie } from '../../interfaces/interfaces';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  
  movies: Movie[] = [];
  search$: string = '';
  faTimes = faTimes
  constructor(private store: Store<MoviesState>, private window: Window) { 
    
  }

  ngOnInit(): void {
   this.store.select(state => state.moviesReducer)
   .subscribe(a => { 
     this.search$ = a.search
    });
  }


  onChangeEvent(ev: string): void {
    this.store.dispatch(update({search: ev}))
    this.saveSearch(ev)
  }

  clearInput(): void {
    this.store.dispatch(clear());
    this.saveSearch("")

  }

  saveSearch(search: string): void {
  this.window.localStorage.setItem("mySearch", JSON.stringify({search: search, page: 1}))
  }

}
