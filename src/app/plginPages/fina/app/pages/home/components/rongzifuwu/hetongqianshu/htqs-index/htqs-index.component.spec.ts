import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtqsIndexComponent } from './htqs-index.component';

describe('HtqsIndexComponent', () => {
  let component: HtqsIndexComponent;
  let fixture: ComponentFixture<HtqsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtqsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtqsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
