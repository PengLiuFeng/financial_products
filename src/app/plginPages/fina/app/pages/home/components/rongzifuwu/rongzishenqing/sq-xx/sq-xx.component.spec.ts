import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqXxComponent } from './sq-xx.component';

describe('SqXxComponent', () => {
  let component: SqXxComponent;
  let fixture: ComponentFixture<SqXxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqXxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqXxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
