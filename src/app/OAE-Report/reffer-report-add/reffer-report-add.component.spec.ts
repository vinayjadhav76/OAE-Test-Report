import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefferReportAddComponent } from './reffer-report-add.component';

describe('RefferReportAddComponent', () => {
  let component: RefferReportAddComponent;
  let fixture: ComponentFixture<RefferReportAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefferReportAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefferReportAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
