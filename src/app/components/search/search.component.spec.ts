import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  const initialState = {moviesReducer: {search: ''}}
  let store: MockStore;

  const mockWindow = {
    localStorage:{
      setItem: jasmine.createSpy('setItem').and.callThrough()
    }
   
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ], 
      providers: [ provideMockStore({ initialState }), { provide: Window, useValue: mockWindow }]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch').and.callFake(()=> {});
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    component.search$ = "";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get search state', () => {
    store.
    select(store=> store.moviesReducer)
    .subscribe(res => {
      expect(component.search$).toEqual('')
    })
  })

  it('should dispatch updates', () => {
    component.onChangeEvent('new');
    expect(store.dispatch).toHaveBeenCalledWith(Object({ search: 'new', type: '[Search Component] Update' }))
  })

  it('shoul store search', () => {
    component.saveSearch('new 2')
    expect(mockWindow.localStorage.setItem).toHaveBeenCalledWith("mySearch",JSON.stringify({search: 'new 2', page: 1}))
  })

});
