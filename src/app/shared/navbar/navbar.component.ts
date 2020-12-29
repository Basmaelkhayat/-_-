import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { ROUTES } from '../../helpers/routes';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title: string = 'Home Page';
  route: string;
  constructor(private router: Router, private location: Location) {}

  getPathInfo() {
    if (this.location.path() != '') {
      this.route = this.location.path();
      if (this.route.charAt(0) === '#') {
        this.route = this.route.slice(1);
      }
      if (this.route.charAt(0) === '/') {
        this.route = this.route.slice(1);
      }

      if (this.location.path() == '/members/member-page') {
        return { path: '', title: 'Member Page' };
      }
      return ROUTES.find((r) => r.path == this.route);
    }
    return ROUTES[0];
  }
  ngOnInit(): void {}
}
