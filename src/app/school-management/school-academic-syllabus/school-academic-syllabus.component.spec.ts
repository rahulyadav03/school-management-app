import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAcademicSyllabusComponent } from './school-academic-syllabus.component';

describe('SchoolAcademicSyllabusComponent', () => {
  let component: SchoolAcademicSyllabusComponent;
  let fixture: ComponentFixture<SchoolAcademicSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolAcademicSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAcademicSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
