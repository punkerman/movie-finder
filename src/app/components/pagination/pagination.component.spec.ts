import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let store: MockStore;

  const mockWindow = {
    localStorage:{
      setItem: jasmine.createSpy('setItem').and.callThrough(),
      getItem: jasmine.createSpy('getItem').and.returnValue(JSON.stringify({search: 'asd', currentPage: 1}))
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ], 
      providers: [{ provide: Window, useValue: mockWindow },provideMockStore({})]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.currPage = 2
    component.totalPages = 100
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set next page',()=> {
    const spy = spyOn(store, 'dispatch')
    component.setNextPage();
    expect(spy).toHaveBeenCalledWith({ type: '[Pagination Component] Increase' })
  })

  it('should set previous page',()=> {
    const spy = spyOn(store, 'dispatch')
    component.setPreviousPage();
    expect(spy).toHaveBeenCalledWith({ type: '[Pagination Component] Decrease' })
  })

  it('should set last page',()=> {
    const spy = spyOn(store, 'dispatch')
    component.setLastPage();
    expect(spy).toHaveBeenCalledWith(Object({ page: 100, type: '[Pagination Component] Page' }))
  })



});
