import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraActivityFeesComponent } from './extra-activity-fees.component';

describe('ExtraActivityFeesComponent', () => {
  let component: ExtraActivityFeesComponent;
  let fixture: ComponentFixture<ExtraActivityFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraActivityFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraActivityFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
