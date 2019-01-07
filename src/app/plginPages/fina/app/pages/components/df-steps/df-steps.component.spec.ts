import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfStepsComponent } from './df-steps.component';

describe('DfStepsComponent', () => {
  let component: DfStepsComponent;
  let fixture: ComponentFixture<DfStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
