import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ROUTES } from '../../helpers/routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  sidebarItems: any;
  constructor(public sanitizer: DomSanitizer) {
    this.sidebarItems = ROUTES.filter((menuItem) => menuItem);
  }

  ngOnInit(): void {}
}
