import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassReportAddComponent } from './pass-report-add.component';

describe('PassReportAddComponent', () => {
  let component: PassReportAddComponent;
  let fixture: ComponentFixture<PassReportAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassReportAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassReportAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
