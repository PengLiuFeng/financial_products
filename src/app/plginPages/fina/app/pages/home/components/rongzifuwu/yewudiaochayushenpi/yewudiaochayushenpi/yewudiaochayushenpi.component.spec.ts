import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YewudiaochayushenpiComponent } from './yewudiaochayushenpi.component';

describe('YewudiaochayushenpiComponent', () => {
  let component: YewudiaochayushenpiComponent;
  let fixture: ComponentFixture<YewudiaochayushenpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YewudiaochayushenpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YewudiaochayushenpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
