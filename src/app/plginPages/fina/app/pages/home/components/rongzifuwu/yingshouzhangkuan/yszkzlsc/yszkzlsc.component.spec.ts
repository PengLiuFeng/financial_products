import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YszkzlscComponent } from './yszkzlsc.component';

describe('YszkzlscComponent', () => {
  let component: YszkzlscComponent;
  let fixture: ComponentFixture<YszkzlscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YszkzlscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YszkzlscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
