import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YszkzrqrhzComponent } from './yszkzrqrhz.component';

describe('YszkzrqrhzComponent', () => {
  let component: YszkzrqrhzComponent;
  let fixture: ComponentFixture<YszkzrqrhzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YszkzrqrhzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YszkzrqrhzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
