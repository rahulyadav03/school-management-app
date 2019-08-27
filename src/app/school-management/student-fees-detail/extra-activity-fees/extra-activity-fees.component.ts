import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  date: string;
  session_year: string;
  reciept_id: number;
  event: string;
  status: string;
  reciept_status: number;
}

export interface Month {
  value: number;
  viewMonth: string;
}

export interface Year {
  value: number;
  viewYear: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: "2019-04-01", session_year: "2019-2020", reciept_id: 456, event: "Music Competation", status: "paid", reciept_status: 1},
  {date: "2019-04-05", session_year: "2019-2020", reciept_id: 428, event: "Dance Competation",  status: "Paid", reciept_status: 1},
  {date: "2019-04-09", session_year: "2019-2020", reciept_id: 145, event: "Summer Camp",  status: "Paid", reciept_status: 1},
  {date: "2019-04-15", session_year: "2019-2020", reciept_id: null, event: "Picnic",  status: "Not Paid", reciept_status: 0},
];

@Component({
  selector: 'app-extra-activity-fees',
  templateUrl: './extra-activity-fees.component.html',
  styleUrls: ['./extra-activity-fees.component.scss']
})
export class ExtraActivityFeesComponent implements OnInit {
  displayedColumns: string[] = ['date', 'session_year', 'reciept_id', 'event', 'status', 'reciept_status'];
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

  months: Month[] = [
    {value: 1, viewMonth: "April"},
    {value: 2, viewMonth: "May"},
    {value: 3, viewMonth: "June"},
    {value: 4, viewMonth: "July"},
    {value: 5, viewMonth: "August"},
    {value: 6, viewMonth: "September"},
    {value: 7, viewMonth: "October"},
    {value: 8, viewMonth: "November"},
    {value: 9, viewMonth: "December"},
    {value: 10, viewMonth: "January"},
    {value: 11, viewMonth: "February"},
    {value: 12, viewMonth: "March"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
