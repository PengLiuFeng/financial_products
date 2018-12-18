import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YszkhgComponent } from './yszkhg.component';

describe('YszkhgComponent', () => {
  let component: YszkhgComponent;
  let fixture: ComponentFixture<YszkhgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YszkhgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YszkhgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
