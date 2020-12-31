import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MerchantService } from 'src/app/services/merchant.service';

@Component({
  selector: 'merchant-cmp',
  templateUrl: 'merchant.component.html',
  styleUrls: ['merchant.component.scss'],
})
export class MerchantComponent implements OnInit {
  merchant: any = null;
  punches: any = null;
  selectedCategory: any = null;
  redeemedRewards: any = null;
  sales: any = null;
  feedback: any = {
    total: 2000,
    rating: 4,
    percentage: {
      '5': 0.75,
      '4': 0.1,
      '3': 0.075,
      '2': 0.05,
      '1': 0.01,
    },
  };
  constructor(private merchantService: MerchantService) {}
  ngOnInit() {
    this.getMerchantInfo();
    this.getMerchantPunches();
    this.getTopRedeemed();
    this.getSales();
  }
  getSales() {
    this.merchantService.getSales('a').subscribe((res) => {
      this.sales = res;
    });
  }
  getTopRedeemed() {
    this.merchantService.getTopRedeemedRewards('a').subscribe((res) => {
      this.redeemedRewards = res;
    });
  }
  getMerchantInfo() {
    this.merchantService.getMerchant('a').subscribe((res) => {
      this.merchant = res;
      this.selectedCategory = this.merchant.category;
    });
  }
  getMerchantPunches() {
    this.merchantService.getMerchantPunches('a').subscribe((res) => {
      this.punches = res;
    });
  }
}
