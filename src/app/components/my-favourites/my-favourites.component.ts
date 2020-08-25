import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-favourites',
  templateUrl: './my-favourites.component.html',
  styleUrls: ['./my-favourites.component.sass']
})
export class MyFavouritesComponent implements OnInit {

  favourites: string[]

  constructor(private window: Window) { }

  ngOnInit(): void {
    this.favourites = this.getFavourites()
  }

  getFavourites():string[] | null {
    const fav = this.window.localStorage.getItem("myMovies");
    return fav !== null ? JSON.parse(fav) : [];
  }

}
