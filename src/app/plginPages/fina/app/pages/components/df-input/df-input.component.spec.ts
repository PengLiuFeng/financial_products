import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfInputComponent } from './df-input.component';

describe('DfInputComponent', () => {
  let component: DfInputComponent;
  let fixture: ComponentFixture<DfInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
