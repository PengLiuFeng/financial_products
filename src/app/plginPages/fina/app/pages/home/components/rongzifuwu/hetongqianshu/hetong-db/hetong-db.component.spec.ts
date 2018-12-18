import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HetongDbComponent } from './hetong-db.component';

describe('HetongDbComponent', () => {
  let component: HetongDbComponent;
  let fixture: ComponentFixture<HetongDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HetongDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HetongDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
