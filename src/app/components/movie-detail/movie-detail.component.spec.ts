import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailComponent } from './movie-detail.component';
import { RatingsComponent } from '../ratings/ratings.component'
import { ApiService } from 'src/app/services/api.service';
import { FullMovie } from 'src/app/interfaces/interfaces';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;
  let service: ApiService
  
  const movie:FullMovie = {
    Actors: "qwe",
    Director: "qwe",
    Genre: "drama",
    Metascore: "12",
    Plot: "long plot",
    Poster: "asdasd.png",
    Rated: "PG",
    Released: "2000",
    Response: "True",
    Title: "qwe",
    Type: "qwe",
    Writer: "qwe",
    Year: "2009",
    imdbID: "123",
    imdbRating: "3",
  }

  const apiMock = {
    getMovieById: jasmine.createSpy('getMovieById').and.returnValue({ subscribe: () => {return 'asdsss'} })
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailComponent, RatingsComponent ],
      // imports: [ HttpClientTestingModule ],
      providers: [{provide: ApiService, useValue: apiMock}]
    })
    .compileComponents();
    service = TestBed.inject(ApiService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch movie',() => {
    component.ngOnInit()
    service.getMovieById('asd').subscribe(res => {
      console.log('=====AAA');
      expect(component.movie).toEqual(movie)
    })
  })

});
