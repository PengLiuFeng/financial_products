import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZjzhComponent } from './zjzh.component';

describe('ZjzhComponent', () => {
  let component: ZjzhComponent;
  let fixture: ComponentFixture<ZjzhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZjzhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZjzhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
