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
  {date: "2019-07-01", day: "MON", period_1: {name:"English",color:"#ff4d94"}, 
                        period_2: {name:"Hindi",color:"green"}, 
                        period_3: {name:"Maths",color:"brown"}, 
                        period_4: {name:"Games",color:"#ff1a1a"}, 
                        period_5: {name:"Games",color:"#ff1a1a"}, 
                        period_6: {name:"Science",color:"#cc66ff"}, 
                        period_7: {name:"Social",color:"#0d1a00"}, 
                        period_8: {name:"Sanskrit",color:"blue"}},
  {date: "2019-07-02", day: "TUE", period_1: {name:"English",color:"#ff4d94"}, 
                       period_2: {name:"Hindi",color:"green"}, 
                       period_3: {name:"Maths",color:"brown"}, 
                       period_4: {name:"Science",color:"#cc66ff"}, 
                       period_5: {name:"Arts",color:"#cccc00"}, 
                       period_6: {name:"Hindi",color:"green"}, 
                       period_7: {name:"Games",color:"#ff1a1a"}, 
                       period_8: {name:"Library",color:"#660033"}},
  {date: "2019-07-03", day: "WED", period_1: {name:"English",color:"#ff4d94"},
                       period_2: {name:"Hindi",color:"green"},
                       period_3: {name:"Maths",color:"brown"},
                       period_4: {name:"Games",color:"#ff1a1a"}, 
                       period_5: {name:"Games",color:"#ff1a1a"}, 
                       period_6: {name:"Science",color:"#cc66ff"}, 
                       period_7: {name:"Social",color:"#0d1a00"}, 
                       period_8: {name:"Sanskrit",color:"blue"}},
  {date: "2019-07-04", day: "THU",  period_1: {name:"English",color:"#ff4d94"}, 
                       period_2: {name:"Hindi",color:"green"}, 
                       period_3: {name:"Maths",color:"brown"}, 
                       period_4: {name:"Science",color:"#cc66ff"}, 
                       period_5: {name:"Sanskrit",color:"blue"}, 
                       period_6: {name:"Library",color:"#660033"}, 
                       period_7: {name:"Maths",color:"brown"}, 
                       period_8: {name:"English",color:"#ff4d94"}},
  {date: "2019-07-05", day: "FRI", period_1: {name:"English",color:"#ff4d94"}, 
                       period_2: {name:"Hindi",color:"green"}, 
                       period_3: {name:"Maths",color:"brown"}, 
                       period_4: {name:"Science",color:"#cc66ff"}, 
                       period_5: {name:"Social",color:"#0d1a00"}, 
                       period_6: {name:"Games",color:"#ff1a1a"}, 
                       period_7: {name:"Maths",color:"brown"}, 
                       period_8: {name:"Science",color:"#cc66ff"}},
  {date: "2019-07-06", day: "SAT", period_1: {name:"CCA",color:"orange"}, 
                       period_2: {name:"CCA",color:"orange"}, 
                       period_3: {name:"Sanskrit",color:"blue"}, 
                       period_4: {name:"Maths",color:"brown"}, 
                       period_5: {name:"Science",color:"#cc66ff"}, 
                       period_6: {name:"Social",color:"#0d1a00"}, 
                       period_7: {name:"English",color:"#ff4d94"}, 
                       period_8: {name:"Games",color:"#ff1a1a"}}
];

@Component({
  selector: 'app-student-timetable',
  templateUrl: './student-timetable.component.html',
  styleUrls: ['./student-timetable.component.scss']
})
export class StudentTimetableComponent implements OnInit {
  displayedColumns: string[] = ['date', 'day', 'period_1', 'period_2', 'period_3', 'period_4', 'period_5', 'period_6', 'period_7', 'period_8'];
  dataSource = PERIOD_ELEMENT;

  constructor() { }

  ngOnInit() {
  }

}
