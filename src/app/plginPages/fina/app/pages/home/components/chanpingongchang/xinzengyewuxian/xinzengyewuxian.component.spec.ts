import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XinzengyewuxianComponent } from './xinzengyewuxian.component';

describe('XinzengyewuxianComponent', () => {
  let component: XinzengyewuxianComponent;
  let fixture: ComponentFixture<XinzengyewuxianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XinzengyewuxianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XinzengyewuxianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
