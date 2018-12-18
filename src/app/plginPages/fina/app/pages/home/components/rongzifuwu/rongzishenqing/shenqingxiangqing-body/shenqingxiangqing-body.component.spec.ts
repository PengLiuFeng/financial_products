import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShenqingxiangqingBodyComponent } from './shenqingxiangqing-body.component';

describe('ShenqingxiangqingBodyComponent', () => {
  let component: ShenqingxiangqingBodyComponent;
  let fixture: ComponentFixture<ShenqingxiangqingBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShenqingxiangqingBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShenqingxiangqingBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
