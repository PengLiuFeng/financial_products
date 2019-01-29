import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfTabsComponent } from './df-tabs.component';

describe('DfTabsComponent', () => {
  let component: DfTabsComponent;
  let fixture: ComponentFixture<DfTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
