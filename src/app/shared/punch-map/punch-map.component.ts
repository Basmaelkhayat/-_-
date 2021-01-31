import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punch-map',
  templateUrl: './punch-map.component.html',
  styleUrls: ['./punch-map.component.scss'],
})
export class PunchMapComponent implements OnInit {
  searchText;
  selectText: string = 'Select property';

  inputValue: string = '';

  addAnother: boolean = false;
  body: any = {
    filters: [],
  };
  dataBody: any = [];
  customers: any = {
    customerData: [],
    searchValue: '',
    filters: this.body.filters,
    page_size: this.body,
  };
  filters: any = [];
  column: string = '';
  showDatePicker: boolean = false;
  loaded: boolean = true;
  condationName: string = '';
  constructor() {}

  ngOnInit() {}
  orders = [
    { id: '1', name: 'Punch range' },
    { id: '2', name: 'Punched reward' },
    { id: '3', name: 'Date' },
    { id: '4', name: 'Number of punches' },
    { id: '5', name: 'Punch range' },
    { id: '6', name: 'Punch range' },
    { id: '7', name: 'Punch range' },
  ];

  probs = [
    { column: 'visits', name: 'Visits' },
    { column: 'spent', name: 'Spent' },
    { column: 'redeems', name: 'Redeems' },
    { column: 'signup_date', name: 'Signup Date' },
    { column: 'first_punch', name: 'First Punch' },
    { column: 'last_visit', name: 'Last Visit' },
  ];
  Pick = [
    { condition: '=', name: 'Equals' },
    { condition: '<', name: 'Lower than' },
    { condition: '>', name: 'Bigger than' },
    { condition: '<=', name: 'Equals & Lower than' },
    { condition: '>=', name: 'Equals & Bigger than' },
  ];
  PickRange = [
    { value: 10 },
    { value: 20 },
    { value: 30 },
    { value: 40 },
    { value: 50 },
  ];
  start = {
    day: '',
    month: '',
    year: '',
  };
  onCustomerLoad(event) {
    this.loaded = true;
  }
  searchTextVal(value, column) {
    this.selectText = value;
    this.condationName = value;
  }
  deleteFilterItem(index) {
    if (this.filters.length != 0) {
      this.filters.splice(index, 1);
      this.body.filters.splice(index, 1);
    }
  }

  addAnotherFilter() {
    this.selectText = 'Select property';
    this.inputValue = '';
    this.addAnother = false;
  }
  filterBody;
  applyFilter() {
    this.addAnother = true;
    this.dataBody = {
      filters: [
        {
          column: this.column,
        },
      ],
    };

    this.filterBody = {
      filters: [
        {
          column: this.condationName,
        },
      ],
    };

    this.body.filters.push(...this.dataBody.filters);
    this.filters.push(...this.filterBody.filters);
  }
}
