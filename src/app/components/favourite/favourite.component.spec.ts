import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FavouriteComponent } from './favourite.component';

describe('FavouriteComponent', () => {
  let component: FavouriteComponent;
  let fixture: ComponentFixture<FavouriteComponent>;

  const mockWindow = {
    localStorage:{
      setItem: jasmine.createSpy('setItem').and.callThrough(),
      getItem: jasmine.createSpy('getItem')
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteComponent],
      imports: [FontAwesomeModule],
      providers: [{ provide: Window, useValue: mockWindow }]

    })
    .compileComponents();
  }));

  describe('Not favourite selected',  ()=> {
    beforeEach(() => {
      fixture = TestBed.createComponent(FavouriteComponent);
      component = fixture.componentInstance;
      component.id = "123"
      mockWindow.localStorage.getItem.and.returnValue(JSON.stringify(['123123']))
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    it('should be color grey', () => {
      const compiledGrey = "rgb(96, 96, 96)"
      const icon = fixture.nativeElement.querySelector('fa-icon')
      expect(icon.style.color).toBe(compiledGrey)
  
    })

    it('should select new favourite', () => {
      component.setFavourite()
      expect(mockWindow.localStorage.setItem).toHaveBeenCalled()
    })
  })

  describe('Favourite selected', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(FavouriteComponent);
      component = fixture.componentInstance;
      component.id = "123123"
      mockWindow.localStorage.getItem.and.returnValue(JSON.stringify(['123123']))
      fixture.detectChanges();
    });

    it('should be color blue', () => {
      const compiledBlue = "rgb(45, 168, 216)"
      fixture.detectChanges()
      const icon = fixture.nativeElement.querySelector('fa-icon')
      expect(icon.style.color).toBe(compiledBlue)
    })
  })

  

  


});
