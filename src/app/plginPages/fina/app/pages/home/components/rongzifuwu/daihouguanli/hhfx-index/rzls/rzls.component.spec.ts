import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RzlsComponent } from './rzls.component';

describe('RzlsComponent', () => {
  let component: RzlsComponent;
  let fixture: ComponentFixture<RzlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RzlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RzlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
