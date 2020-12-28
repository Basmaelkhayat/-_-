import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MerchantService } from 'src/app/services/merchant.service';

@Component({
  selector: 'merchant-cmp',
  templateUrl: 'merchant.component.html',
  styleUrls: ['merchant.component.scss'],
})
export class MerchantComponent implements OnInit {
  merchant: any = null;
  selectedCategory: any = null;
  constructor(private merchantService: MerchantService) {}
  ngOnInit() {
    this.getMerchantInfo();
  }
  getMerchantInfo() {
    this.merchantService.getMerchant('a').subscribe((res) => {
      this.merchant = res;
      this.selectedCategory = this.merchant.category;
      console.log(res);
    });
  }
}
