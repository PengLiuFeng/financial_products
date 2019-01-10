import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfSelectComponent } from './df-select.component';

describe('DfSelectComponent', () => {
  let component: DfSelectComponent;
  let fixture: ComponentFixture<DfSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
