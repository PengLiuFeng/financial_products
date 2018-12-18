import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RongzifafangheyueguizeComponent } from './rongzifafangheyueguize.component';

describe('RongzifafangheyueguizeComponent', () => {
  let component: RongzifafangheyueguizeComponent;
  let fixture: ComponentFixture<RongzifafangheyueguizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RongzifafangheyueguizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RongzifafangheyueguizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
