import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YujinglishiComponent } from './yujinglishi.component';

describe('YujinglishiComponent', () => {
  let component: YujinglishiComponent;
  let fixture: ComponentFixture<YujinglishiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YujinglishiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YujinglishiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
