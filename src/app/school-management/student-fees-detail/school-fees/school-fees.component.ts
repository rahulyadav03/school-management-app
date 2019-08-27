import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  session: string;
  reciept_id: number;
  status: string;
  reciept_status: number;
}

export interface Year {
  value: number;
  viewYear: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {session: "Apr - June", reciept_id: 456, status: "paid", reciept_status: 1},
  {session: "July - Sep", reciept_id: null, status: "Not Paid", reciept_status: 0},
  {session: "Oct - Dec", reciept_id: null, status: "NA", reciept_status: 2},
  {session: "Jan - Mar", reciept_id: null, status: "NA", reciept_status: 2},
];

@Component({
  selector: 'app-school-fees',
  templateUrl: './school-fees.component.html',
  styleUrls: ['./school-fees.component.scss']
})

export class SchoolFeesComponent implements OnInit {
  displayedColumns: string[] = ['session', 'reciept_id', 'status', 'reciept_status'];
  dataSource = ELEMENT_DATA;

  years: Year[] = [
    {value: 1, viewYear: "2014-2015"},
    {value: 2, viewYear: "2015-2016"},
    {value: 3, viewYear: "2016-2017"},
    {value: 4, viewYear: "2017-2018"},
    {value: 5, viewYear: "2018-2019"},
    {value: 6, viewYear: "2019-2020"}
  ];

  selected = 6;

  constructor() { }

  ngOnInit() {
  }

}
