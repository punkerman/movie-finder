import { Component, OnInit } from '@angular/core';
import { MoviesState } from '../../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { update, setPage } from '../../store/actions/movies.actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private window: Window, private store: Store<MoviesState>) { }

  ngOnInit():void {
   this.store.select(state => state.moviesReducer).pipe(take(1)).subscribe(newState => { 
    if (newState.search === '') {
      this.loadLastSearch()
    }
   })
  }

  loadLastSearch():void {
    const mySearch: string | null = this.window.localStorage.getItem("mySearch");
    const mySearchObj = mySearch !== null ? JSON.parse(mySearch) : null
    if (mySearchObj !== null) {
      if (mySearchObj.search.length > 2) {
        this.store.dispatch(update({search: mySearchObj.search }))
        this.store.dispatch(setPage({page: mySearchObj.page}))

      }
    }

  }

}
