import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XinshenComponent } from './xinshen.component';

describe('XinshenComponent', () => {
  let component: XinshenComponent;
  let fixture: ComponentFixture<XinshenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XinshenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XinshenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
