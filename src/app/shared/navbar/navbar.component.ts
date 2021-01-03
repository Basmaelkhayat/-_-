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
    let pathLinks = [];
    if (this.location.path() != '') {
      this.route = this.location.path();
      this.route = this.route.replace('#', '');
      pathLinks = this.route.split('/').filter((link) => link != '');

      pathLinks.forEach((path, index, array) => {
        let route = ROUTES.find((r) => r.path == path);
        array[index] = route ? route : { path, title: path };
      });
      return pathLinks;
      // if (this.route.charAt(0) === '#') {
      //   this.route = this.route.slice(1);
      // }
      // if (this.route.charAt(0) === '/') {
      //   this.route = this.route.slice(1);
      // }
    } else {
      return [ROUTES[0]];
    }
  }
  ngOnInit(): void {}
}
