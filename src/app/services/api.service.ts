import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SearchRestults, FullMovie} from '../interfaces/interfaces'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiBaseUrl = "http://www.omdbapi.com/?apikey=f79aeba3";
  search="&s=";
  type="&type=movie";
  page="&page=";
  plot="&plot=full";
  id="&i="


  constructor(private http: HttpClient) {}

  private handleError<T>(result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }

  getMoviesByTitle(searchParam: string, pageNumber: number): Observable<SearchRestults> {
    return this.http.get<SearchRestults>(`${this.apiBaseUrl}${this.search}${searchParam}${this.type}${this.plot}${this.page}${pageNumber}`).pipe(
      catchError(this.handleError)
    );

  } 

  getMovieById(imdbId: string):Observable<FullMovie> {
    return this.http.get<FullMovie>(`${this.apiBaseUrl}${this.id}${imdbId}${this.type}${this.plot}`).pipe(
      catchError(this.handleError)
    );
  }


}
