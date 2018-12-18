import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YszkzltjComponent } from './yszkzltj.component';

describe('YszkzltjComponent', () => {
  let component: YszkzltjComponent;
  let fixture: ComponentFixture<YszkzltjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YszkzltjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YszkzltjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
