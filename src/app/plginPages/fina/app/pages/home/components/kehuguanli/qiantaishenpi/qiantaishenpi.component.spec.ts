import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QiantaishenpiComponent } from './qiantaishenpi.component';

describe('QiantaishenpiComponent', () => {
  let component: QiantaishenpiComponent;
  let fixture: ComponentFixture<QiantaishenpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QiantaishenpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QiantaishenpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
