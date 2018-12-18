import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YwdcyspHeaderComponent } from './ywdcysp-header.component';

describe('YwdcyspHeaderComponent', () => {
  let component: YwdcyspHeaderComponent;
  let fixture: ComponentFixture<YwdcyspHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YwdcyspHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YwdcyspHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
