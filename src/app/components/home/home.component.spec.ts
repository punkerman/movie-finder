import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HomeComponent } from './home.component';
import { take } from 'rxjs/operators';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { SearchComponent } from '../search/search.component';
import { ResultsTableComponent } from '../results-table/results-table.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore;
  const mockWindow = {
    localStorage:{
      getItem: jasmine.createSpy('getItem').and.returnValue(JSON.stringify({"search":"star","page":1}))
    }
  }

  const initialState = {moviesReducer: {search: ''}}


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [{ provide: Window, useValue: mockWindow }, 
        provideMockStore({ initialState })]

    })
    .compileComponents();
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch').and.callFake(()=> {});
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch stored search', () => {
    store.
    select(store=> store.moviesReducer).pipe(take(1))
    .subscribe(res => {
      expect(mockWindow.localStorage.getItem).toHaveBeenCalled()
      expect(store.dispatch).toHaveBeenCalledTimes(2);
    })
  });

});
