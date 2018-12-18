import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HetongDbxqComponent } from './hetong-dbxq.component';

describe('HetongDbxqComponent', () => {
  let component: HetongDbxqComponent;
  let fixture: ComponentFixture<HetongDbxqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HetongDbxqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HetongDbxqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
