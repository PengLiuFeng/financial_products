import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YszkhgXxComponent } from './yszkhg-xx.component';

describe('YszkhgXxComponent', () => {
  let component: YszkhgXxComponent;
  let fixture: ComponentFixture<YszkhgXxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YszkhgXxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YszkhgXxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
