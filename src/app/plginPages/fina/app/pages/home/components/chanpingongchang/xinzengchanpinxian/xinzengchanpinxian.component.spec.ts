import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XinzengchanpinxianComponent } from './xinzengchanpinxian.component';

describe('XinzengchanpinxianComponent', () => {
  let component: XinzengchanpinxianComponent;
  let fixture: ComponentFixture<XinzengchanpinxianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XinzengchanpinxianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XinzengchanpinxianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
