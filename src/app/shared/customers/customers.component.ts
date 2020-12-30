import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
    searchText;
    selectText :string ="Select property";
    showFilter : boolean = true;
    constructor() {}

    ngOnInit() {
    }
    orders=[
        { id: '1', name: 'Punch range' },
        { id: '2', name: 'Punched reward' },
        { id: '3', name: 'Date' },
        { id: '4', name: 'Number of punches' },
        { id: '5', name: 'Punch range' },
        { id: '6', name: 'Punch range' },
        { id: '7', name: 'Punch range' },
    ]
    
    searchTextVal(value){
        this.selectText=value;
        this.showFilter = !this.showFilter
        // this.memberService.storeMembers(this.body).subscribe();
    }
    changeStatus(){
        this.showFilter = !this.showFilter
        this.selectText ="Select property";
    }
    body = {
      "sortBy": "created_at",
      "sortDirection": "asc",
      "filters": [
          {
              "column": "visits",
              "condition": ">=",
              "value": 1
          },
          {
              "column": "spent",
              "condition": "<",
              "value": 9999
          },
          {
              "column": "redeems",
              "condition": ">",
              "value": 1
          },
          {
              "column": "signup_date",
              "condition": ">=",
              "value": "2020-01-01"
          }
          ,
          {
              "column": "first_punch",
              "condition": ">=",
              "value": "2020-01-01"
          },
          {
              "column": "last_visit",
              "condition": ">=",
              "value": "2020-01-01"
          }
          ]
      }

}
