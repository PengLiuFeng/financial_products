import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YszkhkComponent } from './yszkhk.component';

describe('YszkhkComponent', () => {
  let component: YszkhkComponent;
  let fixture: ComponentFixture<YszkhkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YszkhkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YszkhkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
