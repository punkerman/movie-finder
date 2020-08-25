import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsTableComponent } from './components/results-table/results-table.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { HomeComponent } from './components/home/home.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { moviesReducer  } from './store/reducers/movies.reducer'
import { PaginationComponent } from './components/pagination/pagination.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { NavigationBackComponent } from './components/navigation-back/navigation-back.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MyFavouritesComponent } from './components/my-favourites/my-favourites.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component'



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsTableComponent,
    MovieCardComponent,
    MovieInfoComponent, 
    HomeComponent, 
    PaginationComponent, 
    RatingsComponent, 
    NavigationBackComponent,
    FavouriteComponent,
    MenuBarComponent,
    MyFavouritesComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({moviesReducer}),
    FontAwesomeModule

  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
