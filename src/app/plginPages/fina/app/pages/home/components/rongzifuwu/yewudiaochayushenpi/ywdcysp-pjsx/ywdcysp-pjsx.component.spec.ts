import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YwdcyspPjsxComponent } from './ywdcysp-pjsx.component';

describe('YwdcyspPjsxComponent', () => {
  let component: YwdcyspPjsxComponent;
  let fixture: ComponentFixture<YwdcyspPjsxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YwdcyspPjsxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YwdcyspPjsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
