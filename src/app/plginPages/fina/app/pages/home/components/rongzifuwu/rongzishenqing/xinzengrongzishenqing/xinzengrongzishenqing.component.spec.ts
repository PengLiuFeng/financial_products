import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XinzengrongzishenqingComponent } from './xinzengrongzishenqing.component';

describe('XinzengrongzishenqingComponent', () => {
  let component: XinzengrongzishenqingComponent;
  let fixture: ComponentFixture<XinzengrongzishenqingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XinzengrongzishenqingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XinzengrongzishenqingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
