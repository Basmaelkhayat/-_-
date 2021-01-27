import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MembersService } from 'src/app/services/member.service';

@Component({
  selector: 'member-cmp',
  templateUrl: 'member.component.html',
  styleUrls: ['member.component.scss'],
})
export class MemberComponent implements OnInit {
  data: any = {
    name: 'Ahmed Mohamed',
    phone: '0114595959449',
    email: 'Ahmed Mohamed@email.com',
    gender: 'male',
    date_of_birth: '5 September',
    total_spent: '8671',
    birthday_in: '2',
    total_visits: '8671',
    redeemed_rewards: '8671',
    total_punches: '8671',
    visits: [
      {
        visits: 12,
        merchant: 'Ahmed',
      },
      {
        visits: 211,
        merchant: 'Ahmed',
      },
      {
        visits: 21212,
        merchant: 'Ahmed',
      },
      {
        visits: 2,
        merchant: 'Ahmed',
      },
      {
        visits: 2,
        merchant: 'Ahmed',
      },
      {
        visits: 2,
        merchant: 'Ahmed',
      },
      {
        visits: 2,
        merchant: 'Ahmed',
      },
      {
        visits: 2,
        merchant: 'Ahmed',
      },
      {
        visits: 2,
        merchant: 'Ahmed',
      },
      {
        visits: 2,
        merchant: 'Ahmed',
      },
    ],
    activity: [
      {
        title: 'Mohamed magdy just punches his second punch at batter half',
        merchant: 'batterhalf & co.',
        payment_type: 'Pay n’ punch',
        value: 3,
      },
      {
        title: 'Mohamed magdy just punches his second punch at batter half',
        merchant: 'batterhalf & co.',
        payment_type: 'Pay n’ punch',
        value: 3,
      },
      {
        title: 'Mohamed magdy just punches his second punch at batter half',
        merchant: 'batterhalf & co.',
        payment_type: 'Pay n’ punch',
        value: 3,
      },
    ],
    first_punch: '24 - September - 2020',
    last_punch: '24 - September - 2020',
    avg_transaction_amount: '400',
  };
  constructor(private membersService: MembersService) {}
  ngOnInit() {
    //this.salesBranchData()
  }
  salesBranchData() {
    this.membersService.members().subscribe((res: any) => {
      this.data = res;
    });
  }
}
