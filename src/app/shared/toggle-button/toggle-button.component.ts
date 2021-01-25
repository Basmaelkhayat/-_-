import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
})
export class ToggleButtonComponent implements OnInit {
  @Input() checked = false;
  @Input() color = null;
  constructor() {}

  ngOnInit(): void {
    if (this.color) {
      document.documentElement.style.setProperty(
        '--toggle-switch-color',
        this.color
      );
    }
  }
}
