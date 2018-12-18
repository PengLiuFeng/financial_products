import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouxinxiangqingComponent } from './shouxinxiangqing.component';

describe('ShouxinxiangqingComponent', () => {
  let component: ShouxinxiangqingComponent;
  let fixture: ComponentFixture<ShouxinxiangqingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShouxinxiangqingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShouxinxiangqingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
