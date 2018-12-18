import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FengxianyujingComponent } from './fengxianyujing.component';

describe('FengxianyujingComponent', () => {
  let component: FengxianyujingComponent;
  let fixture: ComponentFixture<FengxianyujingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FengxianyujingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FengxianyujingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
