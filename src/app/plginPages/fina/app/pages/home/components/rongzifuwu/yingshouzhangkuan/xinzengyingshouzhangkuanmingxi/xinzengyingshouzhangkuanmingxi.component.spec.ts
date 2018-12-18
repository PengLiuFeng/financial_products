import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XinzengyingshouzhangkuanmingxiComponent } from './xinzengyingshouzhangkuanmingxi.component';

describe('XinzengyingshouzhangkuanmingxiComponent', () => {
  let component: XinzengyingshouzhangkuanmingxiComponent;
  let fixture: ComponentFixture<XinzengyingshouzhangkuanmingxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XinzengyingshouzhangkuanmingxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XinzengyingshouzhangkuanmingxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
