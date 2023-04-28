import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiftysixReportAddComponent } from './fiftysix-report-add.component';

describe('FiftysixReportAddComponent', () => {
  let component: FiftysixReportAddComponent;
  let fixture: ComponentFixture<FiftysixReportAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiftysixReportAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiftysixReportAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
