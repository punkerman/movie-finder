import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationBackComponent } from './navigation-back.component';

describe('NavigationBackComponent', () => {
  let component: NavigationBackComponent;
  let fixture: ComponentFixture<NavigationBackComponent>;

  const locationMock = {
    back: jasmine.createSpy('back').and.callThrough()
}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationBackComponent ],
      imports: [FontAwesomeModule],
      providers: [{provide: Location, useValue: locationMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoudl send back', () => {
    const location = fixture.debugElement.injector.get(Location);
    component.handleBackClick()
    expect(location.back).toHaveBeenCalledTimes(1)
  })


});
