import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { State, MoviesState } from '../../interfaces/interfaces';
import { increasePage, decreasePage, setPage } from '../../store/actions/movies.actions';




@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {


  @Input() currPage: number
  @Input() totalPages:number

  constructor(private store: Store<MoviesState>, private window: Window) { }

  ngOnInit(): void {
  }

  setNextPage(): void {
    this.store.dispatch(increasePage())
    this.updateMySearch(this.currPage + 1)
  }

  setPreviousPage(): void{
    this.store.dispatch(decreasePage())
    this.updateMySearch(this.currPage - 1)
  }

  setLastPage(): void{
    this.store.dispatch(setPage({page: this.totalPages}))
    this.updateMySearch(this.totalPages)
  }

  setFirstPage(): void{
    this.store.dispatch(setPage({page: 1}))
    this.updateMySearch(1)

  }

  updateMySearch(page: number): void {
    const mySearch = this.window.localStorage.getItem("mySearch");
    const mySearchObj = JSON.parse(mySearch)
    this.window.localStorage.setItem("mySearch", JSON.stringify({search: mySearchObj.search, page: page}))
  }

}
