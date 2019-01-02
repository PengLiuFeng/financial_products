import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YingshouzhangkuanhuankuanComponent } from './yingshouzhangkuanhuankuan.component';

describe('YingshouzhangkuanhuankuanComponent', () => {
  let component: YingshouzhangkuanhuankuanComponent;
  let fixture: ComponentFixture<YingshouzhangkuanhuankuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YingshouzhangkuanhuankuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YingshouzhangkuanhuankuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
