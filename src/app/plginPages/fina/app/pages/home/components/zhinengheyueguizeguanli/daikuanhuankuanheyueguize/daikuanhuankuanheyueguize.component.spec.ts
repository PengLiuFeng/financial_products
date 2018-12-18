import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaikuanhuankuanheyueguizeComponent } from './daikuanhuankuanheyueguize.component';

describe('DaikuanhuankuanheyueguizeComponent', () => {
  let component: DaikuanhuankuanheyueguizeComponent;
  let fixture: ComponentFixture<DaikuanhuankuanheyueguizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaikuanhuankuanheyueguizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaikuanhuankuanheyueguizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
