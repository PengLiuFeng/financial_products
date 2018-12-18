import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LianxixinxiComponent } from './lianxixinxi.component';

describe('LianxixinxiComponent', () => {
  let component: LianxixinxiComponent;
  let fixture: ComponentFixture<LianxixinxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LianxixinxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LianxixinxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
