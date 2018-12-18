import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PingjishouxinComponent } from './pingjishouxin.component';

describe('PingjishouxinComponent', () => {
  let component: PingjishouxinComponent;
  let fixture: ComponentFixture<PingjishouxinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PingjishouxinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PingjishouxinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
