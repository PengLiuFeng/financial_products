import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaiqianjindiaobaogaoComponent } from './daiqianjindiaobaogao.component';

describe('DaiqianjindiaobaogaoComponent', () => {
  let component: DaiqianjindiaobaogaoComponent;
  let fixture: ComponentFixture<DaiqianjindiaobaogaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaiqianjindiaobaogaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaiqianjindiaobaogaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
