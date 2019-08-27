import { Component, OnInit } from '@angular/core';

export interface LeaveElement {
  date: string;
  leave_name: string;
  leave_reason: string;
  leave_status: string;
}

export interface Leave {
  value: number;
  viewLeave: string;
}

const LEAVE_DATA: LeaveElement[] = [
  {date: "2019-04-01", leave_name: "Sick", leave_reason: "Not well.", leave_status: "Approved"},
  {date: "2019-04-05", leave_name: "Sick", leave_reason: "Having caugh.", leave_status: "Approved"},
  {date: "2019-04-09", leave_name: "Family Function", leave_reason: "Elder brother merriage", leave_status: "Rejected"},
  {date: "2019-04-15", leave_name: "Emergency", leave_reason: "Accident of a family friend", leave_status: "Approved"},
];

@Component({
  selector: 'app-student-leave',
  templateUrl: './student-leave.component.html',
  styleUrls: ['./student-leave.component.scss']
})
export class StudentLeaveComponent implements OnInit {
  displayedColumns: string[] = ['date', 'leave_name', 'leave_reason', 'leave_status'];
  dataSource = LEAVE_DATA;

  leaves: Leave[] = [
    {value: 1, viewLeave: "Sick"},
    {value: 2, viewLeave: "Family Function"},
    {value: 3, viewLeave: "Emergency"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
