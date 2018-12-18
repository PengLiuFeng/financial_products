import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HetongqianshuComponent } from './hetongqianshu.component';

describe('HetongqianshuComponent', () => {
  let component: HetongqianshuComponent;
  let fixture: ComponentFixture<HetongqianshuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HetongqianshuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HetongqianshuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
