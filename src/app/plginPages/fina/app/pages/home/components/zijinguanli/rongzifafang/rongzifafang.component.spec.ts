import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RongzifafangComponent } from './rongzifafang.component';

describe('RongzifafangComponent', () => {
  let component: RongzifafangComponent;
  let fixture: ComponentFixture<RongzifafangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RongzifafangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RongzifafangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
