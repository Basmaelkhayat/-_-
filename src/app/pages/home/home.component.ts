import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MembersService } from 'src/app/services/member.service';
import { MerchantService } from 'src/app/services/merchant.service';

@Component({
  selector: 'home-cmp',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  data : any ;
  punches: any = null;
  constructor(private merchantService: MerchantService ,
    private membersService :MembersService) {}
  ngOnInit() {
    this.salesBranchData()
    this.getMerchantPunches()
  }
  salesBranchData() {
        this.membersService.members().subscribe((res: any) => {
            this.data = res ;
        });
    }
    getMerchantPunches() {
      this.merchantService.getMerchantPunches('a').subscribe((res) => {
        this.punches = res;
      });
    }
  }
