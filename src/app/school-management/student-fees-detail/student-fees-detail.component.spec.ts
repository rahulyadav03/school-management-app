import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFeesDetailComponent } from './student-fees-detail.component';

describe('StudentFeesDetailComponent', () => {
  let component: StudentFeesDetailComponent;
  let fixture: ComponentFixture<StudentFeesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFeesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFeesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
