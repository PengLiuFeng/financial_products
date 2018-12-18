import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XinzengshouxinComponent } from './xinzengshouxin.component';

describe('XinzengshouxinComponent', () => {
  let component: XinzengshouxinComponent;
  let fixture: ComponentFixture<XinzengshouxinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XinzengshouxinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XinzengshouxinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
