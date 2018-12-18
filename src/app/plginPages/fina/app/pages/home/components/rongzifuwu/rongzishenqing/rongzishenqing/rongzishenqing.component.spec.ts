import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RongzishenqingComponent } from './rongzishenqing.component';

describe('RongzishenqingComponent', () => {
  let component: RongzishenqingComponent;
  let fixture: ComponentFixture<RongzishenqingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RongzishenqingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RongzishenqingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
