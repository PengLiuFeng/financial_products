import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightWinComponent } from './right-win.component';

describe('RightWinComponent', () => {
  let component: RightWinComponent;
  let fixture: ComponentFixture<RightWinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightWinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
