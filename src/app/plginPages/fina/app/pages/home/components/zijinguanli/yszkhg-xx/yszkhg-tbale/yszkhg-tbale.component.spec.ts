import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YszkhgTbaleComponent } from './yszkhg-tbale.component';

describe('YszkhgTbaleComponent', () => {
  let component: YszkhgTbaleComponent;
  let fixture: ComponentFixture<YszkhgTbaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YszkhgTbaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YszkhgTbaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
