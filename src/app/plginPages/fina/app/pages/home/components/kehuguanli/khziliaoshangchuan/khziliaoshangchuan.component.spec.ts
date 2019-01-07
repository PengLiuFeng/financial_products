import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhziliaoshangchuanComponent } from './khziliaoshangchuan.component';

describe('KhziliaoshangchuanComponent', () => {
  let component: KhziliaoshangchuanComponent;
  let fixture: ComponentFixture<KhziliaoshangchuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhziliaoshangchuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhziliaoshangchuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
