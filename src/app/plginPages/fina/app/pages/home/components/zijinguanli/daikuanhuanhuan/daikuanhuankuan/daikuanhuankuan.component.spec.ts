import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaikuanhuankuanComponent } from './daikuanhuankuan.component';

describe('DaikuanhuankuanComponent', () => {
  let component: DaikuanhuankuanComponent;
  let fixture: ComponentFixture<DaikuanhuankuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaikuanhuankuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaikuanhuankuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
