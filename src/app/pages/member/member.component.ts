import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MembersService } from 'src/app/services/member.service';

@Component({
  selector: 'member-cmp',
  templateUrl: 'member.component.html',
  styleUrls: ['member.component.scss'],
})
export class MemberComponent implements OnInit {
  constructor(private membersService :MembersService) {}
  ngOnInit() {
    this.salesBranchData()
  }
  salesBranchData() {
        this.membersService.members().subscribe((res: any) => {
            console.log(res)
        });
    }
}
