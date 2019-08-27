import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfYearlyComponent } from './half-yearly.component';

describe('HalfYearlyComponent', () => {
  let component: HalfYearlyComponent;
  let fixture: ComponentFixture<HalfYearlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfYearlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfYearlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
