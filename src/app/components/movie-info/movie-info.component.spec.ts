import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MovieInfoComponent } from './movie-info.component';
import { of } from 'rxjs';

describe('MovieInfoComponent', () => {
  let component: MovieInfoComponent;
  let fixture: ComponentFixture<MovieInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieInfoComponent ],
      providers: [{
        provide: ActivatedRoute,
        useValue: { 
          params: of(
            {
              id: 'i2123'
            }
          )
        }
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selected movie from router', () => {
    expect(component.selectedMovie$).toEqual('i2123')
  })


});
