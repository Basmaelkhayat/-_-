import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  title = 'zeal-admin-panel';

  constructor(private location: Location) {}

  getMemberPadding() {
    if (this.location.path() == '/members/member-page') {
      return '1.5rem !important';
    } else {
      return '';
    }
  }
}
