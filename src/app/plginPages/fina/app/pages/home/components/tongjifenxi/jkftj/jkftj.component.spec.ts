import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JkftjComponent } from './jkftj.component';

describe('JkftjComponent', () => {
  let component: JkftjComponent;
  let fixture: ComponentFixture<JkftjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JkftjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JkftjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
