import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiliaoshangchuanComponent } from './ziliaoshangchuan.component';

describe('ZiliaoshangchuanComponent', () => {
  let component: ZiliaoshangchuanComponent;
  let fixture: ComponentFixture<ZiliaoshangchuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZiliaoshangchuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZiliaoshangchuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
