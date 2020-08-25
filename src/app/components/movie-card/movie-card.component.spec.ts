import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieCardComponent } from './movie-card.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';


const mockMovie = {
  Poster: 'posterPath.png',
  Title: 'Star wars',
  Type: 'movie',
  Year: '1980',
  imdbID: '123123'
}

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCardComponent ],
      imports: [RouterTestingModule],
      providers: [provideMockStore({})]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    component.movie = mockMovie;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch selected movie', () => {
    const spy = spyOn(store, 'dispatch')
    component.setSelectedMovie()
    expect(spy).toHaveBeenCalledTimes(1)
  })

});
