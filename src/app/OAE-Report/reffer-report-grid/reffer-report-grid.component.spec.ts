import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefferReportGridComponent } from './reffer-report-grid.component';

describe('RefferReportGridComponent', () => {
  let component: RefferReportGridComponent;
  let fixture: ComponentFixture<RefferReportGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefferReportGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefferReportGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
