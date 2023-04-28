import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeReportAddComponent } from './discharge-report-add.component';

describe('DischargeReportAddComponent', () => {
  let component: DischargeReportAddComponent;
  let fixture: ComponentFixture<DischargeReportAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DischargeReportAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargeReportAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
