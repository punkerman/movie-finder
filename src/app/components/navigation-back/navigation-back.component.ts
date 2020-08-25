import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navigation-back',
  templateUrl: './navigation-back.component.html',
  styleUrls: ['./navigation-back.component.sass']
})
export class NavigationBackComponent {

  faArrowLeft = faArrowLeft

  constructor(private _location: Location) { }

  handleBackClick(): void {
    this._location.back();
  }

}
