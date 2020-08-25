import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ApiService } from 'src/app/services/api.service';
let service: ApiService


import { ResultsTableComponent } from './results-table.component';
import { SearchRestults, FullMovie } from 'src/app/interfaces/interfaces';

describe('ResultsTableComponent', () => {
  let component: ResultsTableComponent;
  let fixture: ComponentFixture<ResultsTableComponent>;
  const initialState = {moviesReducer: {search: 'star', currentPage: 4}}
  let store: MockStore;

  const apiMock = {
    getMoviesByTitle: jasmine.createSpy('getMoviesByTitle').and.returnValue({ subscribe: () => {} })
  }

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

  const results: SearchRestults  = {
    Search: [movie, movie],
    Response: "True",
    totalResults: "2"
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsTableComponent ],
      providers: [provideMockStore({ initialState }),{provide: ApiService, useValue: apiMock} ]

    })
    .compileComponents();
    store = TestBed.inject(MockStore);
    service = TestBed.inject(ApiService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsTableComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update moviesList', () => {
    store.select(store => store.movieReducer).subscribe(res=> 
        {
          expect(component.currPage).toEqual(4)
    });
    apiMock.getMoviesByTitle().subscribe(res => {
      expect(component.movies).toEqual(results.Search)
    })


  })
});
