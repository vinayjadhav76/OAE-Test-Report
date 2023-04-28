import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeReportGridComponent } from './discharge-report-grid.component';

describe('DischargeReportGridComponent', () => {
  let component: DischargeReportGridComponent;
  let fixture: ComponentFixture<DischargeReportGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DischargeReportGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargeReportGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
