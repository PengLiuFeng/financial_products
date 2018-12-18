import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YewuxianpeizhiComponent } from './yewuxianpeizhi.component';

describe('YewuxianpeizhiComponent', () => {
  let component: YewuxianpeizhiComponent;
  let fixture: ComponentFixture<YewuxianpeizhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YewuxianpeizhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YewuxianpeizhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
