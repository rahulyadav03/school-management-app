import { Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import {VERSION} from '@angular/material';
import {NavItem} from './nav-item';
import {NavService} from './nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('appDrawer', null) public appDrawer: ElementRef;
  title = 'nested-sidbar';
  version = VERSION;
  navItems: NavItem[] = [
    {
      displayName: 'DevFestFL',
      iconName: 'recent_actors',
      route: 'devfestfl',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          route: 'devfestfl/speakers',
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'person',
              route: 'devfestfl/speakers/michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'devfestfl/speakers/michael-prentice/material-design'
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'person',
              route: 'devfestfl/speakers/stephen-fluin',
              children: [
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'star_rate',
                  route: 'devfestfl/speakers/stephen-fluin/what-up-web'
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'person',
              route: 'devfestfl/speakers/mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'devfestfl/speakers/mike-brocchi/my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'devfestfl/speakers/mike-brocchi/become-angular-tailer'
                }
              ]
            }
          ]
        },
        {
          displayName: 'Sessions',
          iconName: 'speaker_notes',
          route: 'devfestfl/sessions',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              iconName: 'star_rate',
              route: 'devfestfl/sessions/material-design'
            },
            {
              displayName: 'What\'s up with the Web?',
              iconName: 'star_rate',
              route: 'devfestfl/sessions/what-up-web'
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'star_rate',
              route: 'devfestfl/sessions/my-ally-cli'
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'star_rate',
              route: 'devfestfl/sessions/become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'devfestfl/feedback'
        }
      ]
    },
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      route: 'dashboard',
      children: []
    },
    {
      displayName: 'Profile',
      iconName: 'account_circle',
      route: 'profile',
      children: []
    },
    {
      displayName: 'Fee Datails',
      iconName: 'payment',
      route: 'fee-details',
      children: [
        {
          displayName: 'School Fees',
          iconName: '',
          route: 'fee-details/school-fees',
        },
        {
          displayName: 'Extra activity fees',
          iconName: '',
          route: 'fee-details/extra-activity-fee',
        }
      ]
    },
    {
      displayName: 'Teachers',
      iconName: 'people',
      route: 'teachers',
      children: []
    },
    {
      displayName: 'Attendence',
      iconName: 'person_pin',
      route: 'attendence',
      children: []
    },
    {
      displayName: 'Marks',
      iconName: 'format_list_numbered',
      route: 'marks',
      children: [
        {
          displayName: 'Class Tests',
          iconName: '',
          route: 'marks/class-tests',
        },
        {
          displayName: 'Unit Tests',
          iconName: '',
          route: 'marks/unit-tests',
        },
        {
          displayName: 'Half Yearly',
          iconName: '',
          route: 'marks/half-yearly',
        },
        {
          displayName: 'Final Results',
          iconName: '',
          route: 'marks/final-results',
        }
      ]
    },
    {
      displayName: 'Exams',
      iconName: 'speaker_notes',
      route: 'exams',
      children: []
    },
    {
      displayName: 'Events',
      iconName: 'event',
      route: 'events',
      children: []
    },
    {
      displayName: 'Time Table',
      iconName: 'calendar_today',
      route: 'time-table',
      children: []
    },
    {
      displayName: 'Leave Application',
      iconName: 'note_add',
      route: 'leave-application',
      children: []
    },
    {
      displayName: 'Library',
      iconName: 'library_books',
      route: 'library',
      children: []
    },
    {
      displayName: 'Academic Syllabus',
      iconName: 'school',
      route: 'academic-syllabus',
      children: []
    },
    {
      displayName: 'Notifications',
      iconName: 'notifications',
      route: 'notifications',
      children: []
    }
  ];
  
  constructor(private navService: NavService) {
  }
  
  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
