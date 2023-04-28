import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiftysixReportGridComponent } from './fiftysix-report-grid.component';

describe('FiftysixReportGridComponent', () => {
  let component: FiftysixReportGridComponent;
  let fixture: ComponentFixture<FiftysixReportGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiftysixReportGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiftysixReportGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
