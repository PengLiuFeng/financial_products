import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonghexinxiComponent } from './zonghexinxi.component';

describe('ZonghexinxiComponent', () => {
  let component: ZonghexinxiComponent;
  let fixture: ComponentFixture<ZonghexinxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonghexinxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonghexinxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
