import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfDialogComponent } from './df-dialog.component';

describe('DfDialogComponent', () => {
  let component: DfDialogComponent;
  let fixture: ComponentFixture<DfDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
