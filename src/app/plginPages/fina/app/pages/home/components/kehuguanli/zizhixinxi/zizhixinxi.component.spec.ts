import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZizhixinxiComponent } from './zizhixinxi.component';

describe('ZizhixinxiComponent', () => {
  let component: ZizhixinxiComponent;
  let fixture: ComponentFixture<ZizhixinxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZizhixinxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZizhixinxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
