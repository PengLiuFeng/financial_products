import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfDatePickerComponent } from './df-date-picker.component';

describe('DfDatePickerComponent', () => {
  let component: DfDatePickerComponent;
  let fixture: ComponentFixture<DfDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
