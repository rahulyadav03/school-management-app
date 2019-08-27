import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';
import {FourthComponent} from './fourth/fourth.component';
import { StudentDashboardComponent } from './school-management/student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './school-management/student-profile/student-profile.component';
import { StudentFeesDetailComponent } from './school-management/student-fees-detail/student-fees-detail.component';
import { StudentTeachersComponent } from './school-management/student-teachers/student-teachers.component';
import { StudentAttendenceComponent } from './school-management/student-attendence/student-attendence.component';
import { StudentMarksComponent } from './school-management/student-marks/student-marks.component';
import { StudentExamsComponent } from './school-management/student-exams/student-exams.component';
import { StudentEventsComponent } from './school-management/student-events/student-events.component';
import { StudentTimetableComponent } from './school-management/student-timetable/student-timetable.component';
import { StudentLeaveComponent } from './school-management/student-leave/student-leave.component';
import { SchoolLibraryComponent } from './school-management/school-library/school-library.component';
import { SchoolAcademicSyllabusComponent } from './school-management/school-academic-syllabus/school-academic-syllabus.component';
import { SchoolFeesComponent } from './school-management/student-fees-detail/school-fees/school-fees.component';
import { ExtraActivityFeesComponent } from './school-management/student-fees-detail/extra-activity-fees/extra-activity-fees.component';
import { ClassTestsComponent } from './school-management/student-marks/class-tests/class-tests.component';
import { UnitTestsComponent } from './school-management/student-marks/unit-tests/unit-tests.component';
import { HalfYearlyComponent } from './school-management/student-marks/half-yearly/half-yearly.component';
import { FinalComponent } from './school-management/student-marks/final/final.component';
import { StudentNotificationComponent } from './school-management/student-notification/student-notification.component';

const routes: Routes = [
  {path: '', component: StudentDashboardComponent, pathMatch: 'full'},
  {path: 'devfestfl', children: [
    {path: 'sessions', children: [
      {path: 'my-ally-cli', component: ThirdComponent},
      {path: 'become-angular-tailer', component: FourthComponent},
      {path: 'material-design', component: FirstComponent},
      {path: 'what-up-web', component: SecondComponent}
    ]},
    {path: 'speakers', children: [
      {path: 'michael-prentice', children: [
        {path: 'material-design', component: FirstComponent}
      ]},
      {path: 'stephen-fluin', children: [
        {path: 'what-up-web', component: SecondComponent}
      ]},
      {path: 'mike-brocchi', children: [
        {path: 'my-ally-cli', component: ThirdComponent},
        {path: 'become-angular-tailer', component: FourthComponent}
      ]},
    ]},
  ]},
  {path: 'dashboard', component: StudentDashboardComponent, pathMatch: 'full'},
  {path: 'profile', component: StudentProfileComponent, pathMatch: 'full'},
  {path: 'fee-details', children: [
    {path: 'school-fees', component: SchoolFeesComponent, pathMatch: 'full'},
    {path: 'extra-activity-fee', component: ExtraActivityFeesComponent, pathMatch: 'full'}
  ]},
  {path: 'fee-details', component: StudentFeesDetailComponent, pathMatch: 'full'},
  {path: 'teachers', component: StudentTeachersComponent, pathMatch: 'full'},
  {path: 'attendence', component: StudentAttendenceComponent, pathMatch: 'full'},
  {path: 'marks', children: [
    {path: 'class-tests', component: ClassTestsComponent, pathMatch: 'full'},
    {path: 'unit-tests', component: UnitTestsComponent, pathMatch: 'full'},
    {path: 'half-yearly', component: HalfYearlyComponent, pathMatch: 'full'},
    {path: 'final-results', component: FinalComponent, pathMatch: 'full'}
  ]},
  {path: 'exams', component: StudentExamsComponent, pathMatch: 'full'},
  {path: 'events', component: StudentEventsComponent, pathMatch: 'full'},
  {path: 'time-table', component: StudentTimetableComponent, pathMatch: 'full'},
  {path: 'leave-application', component: StudentLeaveComponent, pathMatch: 'full'},
  {path: 'library', component: SchoolLibraryComponent, pathMatch: 'full'},
  {path: 'academic-syllabus', component: SchoolAcademicSyllabusComponent, pathMatch: 'full'},
  {path: 'notifications', component: StudentNotificationComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
