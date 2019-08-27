import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';

import { NavService } from './nav.service';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { StudentProfileComponent } from './school-management/student-profile/student-profile.component';
import { StudentDashboardComponent } from './school-management/student-dashboard/student-dashboard.component';
import { StudentFeesDetailComponent } from './school-management/student-fees-detail/student-fees-detail.component';
import { StudentTeachersComponent } from './school-management/student-teachers/student-teachers.component';
import { StudentAttendenceComponent } from './school-management/student-attendence/student-attendence.component';
import { StudentMarksComponent } from './school-management/student-marks/student-marks.component';
import { StudentExamsComponent } from './school-management/student-exams/student-exams.component';
import { StudentEventsComponent } from './school-management/student-events/student-events.component';
import { StudentTimetableComponent } from './school-management/student-timetable/student-timetable.component';
import { StudentLeaveComponent } from './school-management/student-leave/student-leave.component';
import { StudentNotificationComponent } from './school-management/student-notification/student-notification.component';
import { SchoolLibraryComponent } from './school-management/school-library/school-library.component';
import { SchoolAcademicSyllabusComponent } from './school-management/school-academic-syllabus/school-academic-syllabus.component';
import { SchoolFeesComponent } from './school-management/student-fees-detail/school-fees/school-fees.component';
import { ExtraActivityFeesComponent } from './school-management/student-fees-detail/extra-activity-fees/extra-activity-fees.component';
import { ClassTestsComponent } from './school-management/student-marks/class-tests/class-tests.component';
import { UnitTestsComponent } from './school-management/student-marks/unit-tests/unit-tests.component';
import { HalfYearlyComponent } from './school-management/student-marks/half-yearly/half-yearly.component';
import { FinalComponent } from './school-management/student-marks/final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MenuListItemComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    StudentProfileComponent,
    StudentDashboardComponent,
    StudentFeesDetailComponent,
    StudentTeachersComponent,
    StudentAttendenceComponent,
    StudentMarksComponent,
    StudentExamsComponent,
    StudentEventsComponent,
    StudentTimetableComponent,
    StudentLeaveComponent,
    StudentNotificationComponent,
    SchoolLibraryComponent,
    SchoolAcademicSyllabusComponent,
    SchoolFeesComponent,
    ExtraActivityFeesComponent,
    ClassTestsComponent,
    UnitTestsComponent,
    HalfYearlyComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,

    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
