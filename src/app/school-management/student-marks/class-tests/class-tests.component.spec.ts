import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTestsComponent } from './class-tests.component';

describe('ClassTestsComponent', () => {
  let component: ClassTestsComponent;
  let fixture: ComponentFixture<ClassTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
