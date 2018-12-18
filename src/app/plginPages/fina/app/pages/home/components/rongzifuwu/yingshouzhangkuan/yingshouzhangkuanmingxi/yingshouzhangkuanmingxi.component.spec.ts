import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YingshouzhangkuanmingxiComponent } from './yingshouzhangkuanmingxi.component';

describe('YingshouzhangkuanmingxiComponent', () => {
  let component: YingshouzhangkuanmingxiComponent;
  let fixture: ComponentFixture<YingshouzhangkuanmingxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YingshouzhangkuanmingxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YingshouzhangkuanmingxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
