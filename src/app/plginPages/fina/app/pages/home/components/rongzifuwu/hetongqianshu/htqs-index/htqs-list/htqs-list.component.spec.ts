import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtqsListComponent } from './htqs-list.component';

describe('HtqsListComponent', () => {
  let component: HtqsListComponent;
  let fixture: ComponentFixture<HtqsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtqsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtqsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
