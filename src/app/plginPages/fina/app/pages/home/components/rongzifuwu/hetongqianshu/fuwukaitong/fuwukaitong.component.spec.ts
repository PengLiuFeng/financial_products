import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuwukaitongComponent } from './fuwukaitong.component';

describe('FuwukaitongComponent', () => {
  let component: FuwukaitongComponent;
  let fixture: ComponentFixture<FuwukaitongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuwukaitongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuwukaitongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
