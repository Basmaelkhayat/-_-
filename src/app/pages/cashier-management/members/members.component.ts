import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cash-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  selectedBusiness = 'Batterhalf & Co';
  constructor() {}

  ngOnInit(): void {}
}
