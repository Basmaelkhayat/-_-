import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  dataTable: any;
  names: any;
  selectedAll: boolean = true;
  loaded: boolean = true;
  @Input() customers: any;
  @Input() filters: any;
  @Output() customersLoaded = new EventEmitter<boolean>(false);

  show: boolean = true;
  constructor(private router: Router) {}
  ngOnInit() {
    this.topCustomersData();
  }
  page_info;
  ngOnChanges() {
    this.dataTable = this.customers.customerData;
    this.page_info = this.customers.page_size;
  }
  spinner: boolean = false;
  custom_filters: any = [];
  changePage(item) {}
  topCustomersData() {}
  CustomerPage(item) {
    this.router.navigate(['/customers/customer-page', item.uuid]);
  }

  selectAll() {
    if (this.selectedAll == true) {
      for (var i = 0; i < this.dataTable.length; i++) {
        this.dataTable[i].selected = this.selectedAll;
      }
      this.selectedAll = false;
      return;
    } else if (this.selectedAll == false) {
      for (var i = 0; i < this.dataTable.length; i++) {
        this.dataTable[i].selected = this.selectedAll;
      }
      this.selectedAll = true;
    }
    return;
  }
}
