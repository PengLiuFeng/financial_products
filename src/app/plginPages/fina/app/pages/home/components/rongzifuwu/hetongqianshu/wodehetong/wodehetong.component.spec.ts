import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WodehetongComponent } from './wodehetong.component';

describe('WodehetongComponent', () => {
  let component: WodehetongComponent;
  let fixture: ComponentFixture<WodehetongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WodehetongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WodehetongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
