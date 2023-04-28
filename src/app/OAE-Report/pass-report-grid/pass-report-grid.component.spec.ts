import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassReportGridComponent } from './pass-report-grid.component';

describe('PassReportGridComponent', () => {
  let component: PassReportGridComponent;
  let fixture: ComponentFixture<PassReportGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassReportGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassReportGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
