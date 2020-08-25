import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavouritesComponent } from './my-favourites.component';

describe('MyFavouritesComponent', () => {
  let component: MyFavouritesComponent;
  let fixture: ComponentFixture<MyFavouritesComponent>;
  const mockStorage = ['12312','12312'];
  const mockWindow = {
    localStorage:{
      getItem: jasmine.createSpy('getItem').and.returnValue(JSON.stringify(mockStorage))
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFavouritesComponent ],
      providers: [{ provide: Window, useValue: mockWindow }]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get favourites', () => {
    expect(component.favourites).toEqual(mockStorage)
  })
});
