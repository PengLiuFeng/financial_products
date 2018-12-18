import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YszkzrdjComponent } from './yszkzrdj.component';

describe('YszkzrdjComponent', () => {
  let component: YszkzrdjComponent;
  let fixture: ComponentFixture<YszkzrdjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YszkzrdjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YszkzrdjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
