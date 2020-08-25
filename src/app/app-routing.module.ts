import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { HomeComponent } from './components/home/home.component';
import { MyFavouritesComponent } from './components/my-favourites/my-favourites.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'movie/:id', component: MovieInfoComponent },
  { path: 'my-favourites', component: MyFavouritesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
