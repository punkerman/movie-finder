import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsComponent } from './ratings.component';

describe('RatingsComponent', () => {
  let component: RatingsComponent;
  let fixture: ComponentFixture<RatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingsComponent);
    component = fixture.componentInstance;
    component.ratings =  {
      imdbRating: {
        value: '9',
        label: 'imdb'
    }, 
      metascore:{
        value: '60',
        label: 'meta'
    }, 
      rated: {
        value: 'pg',
        label: 'rated'
    }
  }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set proper colors', ()=> {
    component.ngOnChanges()
    const green = '#77ce25'
    const yellow = '#f0e54e'
    expect(component.imbdColor).toEqual(green)
    expect(component.metacriticColor).toEqual(yellow)
  })

});
