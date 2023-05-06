import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefferUpdateComponent } from './reffer-update.component';

describe('RefferUpdateComponent', () => {
  let component: RefferUpdateComponent;
  let fixture: ComponentFixture<RefferUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefferUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefferUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
