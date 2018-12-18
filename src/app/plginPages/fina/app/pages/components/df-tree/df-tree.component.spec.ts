import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfTreeComponent } from './df-tree.component';

describe('DfTreeComponent', () => {
  let component: DfTreeComponent;
  let fixture: ComponentFixture<DfTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
