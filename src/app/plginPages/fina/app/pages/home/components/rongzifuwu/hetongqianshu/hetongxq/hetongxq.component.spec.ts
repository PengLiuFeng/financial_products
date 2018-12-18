import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HetongxqComponent } from './hetongxq.component';

describe('HetongxqComponent', () => {
  let component: HetongxqComponent;
  let fixture: ComponentFixture<HetongxqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HetongxqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HetongxqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
