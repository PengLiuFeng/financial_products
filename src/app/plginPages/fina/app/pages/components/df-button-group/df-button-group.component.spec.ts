import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfButtonGroupComponent } from './df-button-group.component';

describe('DfButtonGroupComponent', () => {
  let component: DfButtonGroupComponent;
  let fixture: ComponentFixture<DfButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
