import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YszktzZrComponent } from './yszktz-zr.component';

describe('YszktzZrComponent', () => {
  let component: YszktzZrComponent;
  let fixture: ComponentFixture<YszktzZrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YszktzZrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YszktzZrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
