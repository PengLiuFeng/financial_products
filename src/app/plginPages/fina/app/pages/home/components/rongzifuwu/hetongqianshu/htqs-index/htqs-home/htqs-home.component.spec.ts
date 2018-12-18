import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtqsHomeComponent } from './htqs-home.component';

describe('HtqsHomeComponent', () => {
  let component: HtqsHomeComponent;
  let fixture: ComponentFixture<HtqsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtqsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtqsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
