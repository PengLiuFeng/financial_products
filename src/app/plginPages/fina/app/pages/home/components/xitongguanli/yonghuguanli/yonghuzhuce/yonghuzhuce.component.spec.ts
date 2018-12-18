import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YonghuzhuceComponent } from './yonghuzhuce.component';

describe('YonghuzhuceComponent', () => {
  let component: YonghuzhuceComponent;
  let fixture: ComponentFixture<YonghuzhuceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YonghuzhuceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YonghuzhuceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
