import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YszktzComponent } from './yszktz.component';

describe('YszktzComponent', () => {
  let component: YszktzComponent;
  let fixture: ComponentFixture<YszktzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YszktzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YszktzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
