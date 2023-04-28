import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortyEightReportGridComponent } from './forty-eight-report-grid.component';

describe('FortyEightReportGridComponent', () => {
  let component: FortyEightReportGridComponent;
  let fixture: ComponentFixture<FortyEightReportGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortyEightReportGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortyEightReportGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
