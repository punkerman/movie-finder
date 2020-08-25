import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SearchRestults, FullMovie, Movie } from '../interfaces/interfaces'
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const mockMovie: Movie ={
    Poster: "asdasd.png",
    Title: "qwe",
    Type: "qwe",
    Year: "2009",
    imdbID: '123'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:  [ HttpClientTestingModule],
      providers: [ApiService]
    });
  
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMoviesByTitle', () => {
    let movies: SearchRestults

    beforeEach(() => {
    movies =  {
      Response: 'true',
      Search: [mockMovie, mockMovie],
      totalResults: "2"
      }
    });
    
    it('should get movies by title',() => {
      const url = 'http://www.omdbapi.com/?apikey=f79aeba3&s=asd&type=movie&plot=full&page=1'
      service.getMoviesByTitle('asd', 1).subscribe(
        mov => expect(mov).toEqual(movies),
        fail
      );

      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toEqual('GET');

      req.flush(movies);
    });
  });

  describe('getMovieById', () => {
    let movie: FullMovie

    beforeEach(() => {
      movie = {
        Actors: "qwe",
        Director: "qwe",
        Genre: "drama",
        Metascore: "12",
        Plot: "long plot",
        Poster: "asdasd.png",
        Rated: "3",
        Released: "2000",
        Response: "True",
        Title: "qwe",
        Type: "qwe",
        Writer: "qwe",
        Year: "2009",
        imdbID: "123",
        imdbRating: "3",
      }
      });
    
      it('should get movie by Id',() => {
        const url = 'http://www.omdbapi.com/?apikey=f79aeba3&i=123&type=movie&plot=full'
        service.getMovieById('123').subscribe(
          mov => expect(mov).toEqual(movie),
          fail
        );
  
        const req = httpTestingController.expectOne(url);
        expect(req.request.method).toEqual('GET');
  
        req.flush(movie);
      })

  })
  


});
