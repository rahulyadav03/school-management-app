import { Component, OnInit } from '@angular/core';

export interface PeriodElement {
  date: string;
  day: string;
  period_1: Object;
  period_2: Object;
  period_3: Object;
  period_4: Object;
  period_5: Object;
  period_6: Object;
  period_7: Object;
  period_8: Object;
}

const PERIOD_ELEMENT: PeriodElement[] = [
  {date: "2019-07-01", day: 'MON', period_1: {name:"Absent",color:"#ff4d94"}, 
                        period_2: {name:"Tardy",color:"green"}, 
                        period_3: {name:"Present",color:"blue"}, 
                        period_4: {name:"Present",color:"blue"}, 
                        period_5: {name:"Present",color:"blue"}, 
                        period_6: {name:"Tardy",color:"green"}, 
                        period_7: {name:"Excused Absent",color:"brown"}, 
                        period_8: {name:"Excused Absent",color:"brown"}},
  {date: "2019-07-02", day: 'TUE', period_1: {name:"Present",color:"blue"}, 
                       period_2: {name:"Present",color:"blue"}, 
                       period_3: {name:"Present",color:"blue"}, 
                       period_4: {name:"Present",color:"blue"}, 
                       period_5: {name:"Present",color:"blue"}, 
                       period_6: {name:"Present",color:"blue"}, 
                       period_7: {name:"Present",color:"blue"}, 
                       period_8: {name:"Present",color:"blue"}},
  {date: "2019-07-03", day: 'WED', period_1: {name:"Tardy",color:"green"},
                       period_2: {name:"Present",color:"blue"},
                       period_3: {name:"Present",color:"blue"},
                       period_4: {name:"Present",color:"blue"}, 
                       period_5: {name:"Present",color:"blue"}, 
                       period_6: {name:"Present",color:"blue"}, 
                       period_7: {name:"Present",color:"blue"}, 
                       period_8: {name:"Present",color:"blue"}},
  {date: "2019-07-04", day: 'THU', period_1: {name:"Excused Absent",color:"brown"}, 
                       period_2: {name:"Excused Absent",color:"brown"}, 
                       period_3: {name:"Excused Absent",color:"brown"}, 
                       period_4: {name:"Present",color:"blue"}, 
                       period_5: {name:"Present",color:"blue"}, 
                       period_6: {name:"Present",color:"blue"}, 
                       period_7: {name:"Present",color:"blue"}, 
                       period_8: {name:"Present",color:"blue"}},
  {date: "2019-07-05", day: 'FRI', period_1: {name:"Present",color:"blue"}, 
                       period_2: {name:"Present",color:"blue"}, 
                       period_3: {name:"Present",color:"blue"}, 
                       period_4: {name:"Present",color:"blue"}, 
                       period_5: {name:"Present",color:"blue"}, 
                       period_6: {name:"Absent",color:"#ff4d94"}, 
                       period_7: {name:"Present",color:"blue"}, 
                       period_8: {name:"Excused Absent",color:"brown"}},
  {date: "2019-07-06", day: 'SAT', period_1: {name:"Excused Trady",color:"orange"}, 
                       period_2: {name:"Present",color:"blue"}, 
                       period_3: {name:"Present",color:"blue"}, 
                       period_4: {name:"Excused Absent",color:"brown"}, 
                       period_5: {name:"Excused Absent",color:"brown"}, 
                       period_6: {name:"Present",color:"blue"}, 
                       period_7: {name:"Present",color:"blue"}, 
                       period_8: {name:"Present",color:"blue"}}
];

@Component({
  selector: 'app-student-attendence',
  templateUrl: './student-attendence.component.html',
  styleUrls: ['./student-attendence.component.scss']
})
export class StudentAttendenceComponent implements OnInit {
  displayedColumns: string[] = ['date', 'day', 'period_1', 'period_2', 'period_3', 'period_4', 'period_5', 'period_6', 'period_7', 'period_8'];
  dataSource = PERIOD_ELEMENT;

  constructor() { }

  ngOnInit() {
  }

}
