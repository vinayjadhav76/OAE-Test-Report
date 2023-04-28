import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortyEightReportAddComponent } from './forty-eight-report-add.component';

describe('FortyEightReportAddComponent', () => {
  let component: FortyEightReportAddComponent;
  let fixture: ComponentFixture<FortyEightReportAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortyEightReportAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortyEightReportAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
