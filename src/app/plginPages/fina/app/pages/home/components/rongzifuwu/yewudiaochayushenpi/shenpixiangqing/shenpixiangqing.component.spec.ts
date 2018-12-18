import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShenpixiangqingComponent } from './shenpixiangqing.component';

describe('ShenpixiangqingComponent', () => {
  let component: ShenpixiangqingComponent;
  let fixture: ComponentFixture<ShenpixiangqingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShenpixiangqingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShenpixiangqingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
