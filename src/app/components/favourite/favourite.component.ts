import { Component, OnInit, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.sass']
})
export class FavouriteComponent implements OnInit {
  @Input() id: string

  favourites: string[]
  faStar = faStar
  color: string

  constructor(private window: Window) { }

  ngOnInit(): void {
    this.updateColor();
  }

  updateColor(): void {
    const index: number = this.getIndex();
    index > -1 ? this.setColor("#2DA8D8") : this.setColor("#606060");
  }

  getFavourites(): string[] | null {
    const fav = this.window.localStorage.getItem("myMovies");
    return fav !== null ? JSON.parse(fav) : [];
  }


  getIndex(): number {
    const currFav: string[] | null = this.getFavourites();
    this.setMyFavourites(currFav);
    return currFav.indexOf(this.id);
  }

  setColor(color: string): void {
    this.color = color;
  }

  setMyFavourites(favourites: string[]): void {
    this.favourites = favourites
  }

  setFavourite(): void {
    const index: number = this.getIndex();
    index > -1 ? this.favourites.splice(index, 1) : this.favourites.push(this.id);
    this.updateFavourite();
    this.updateColor();
  }

  updateFavourite(): void {
  this.window.localStorage.setItem("myMovies", JSON.stringify(this.favourites));
  }

}
