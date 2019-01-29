import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfTabPaneComponent } from './df-tab-pane.component';

describe('DfTabPaneComponent', () => {
  let component: DfTabPaneComponent;
  let fixture: ComponentFixture<DfTabPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfTabPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfTabPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
