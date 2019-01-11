import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShenpiPageComponent } from './shenpi-page.component';

describe('ShenpiPageComponent', () => {
  let component: ShenpiPageComponent;
  let fixture: ComponentFixture<ShenpiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShenpiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShenpiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
