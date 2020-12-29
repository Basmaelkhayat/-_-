import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MembersService } from 'src/app/services/member.service';

@Component({
  selector: 'home-cmp',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  data : any ;
  constructor(private membersService :MembersService) {}
  ngOnInit() {
    this.salesBranchData()
  }
  salesBranchData() {
        this.membersService.members().subscribe((res: any) => {
            this.data = res ;
        });
    }
  }
