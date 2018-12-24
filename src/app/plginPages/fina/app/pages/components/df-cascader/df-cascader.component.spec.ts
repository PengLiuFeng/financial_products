import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfCascaderComponent } from './df-cascader.component';

describe('DfCascaderComponent', () => {
  let component: DfCascaderComponent;
  let fixture: ComponentFixture<DfCascaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfCascaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfCascaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
