import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShenqingxiangqingHeadComponent } from './shenqingxiangqing-head.component';

describe('ShenqingxiangqingHeadComponent', () => {
  let component: ShenqingxiangqingHeadComponent;
  let fixture: ComponentFixture<ShenqingxiangqingHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShenqingxiangqingHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShenqingxiangqingHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
