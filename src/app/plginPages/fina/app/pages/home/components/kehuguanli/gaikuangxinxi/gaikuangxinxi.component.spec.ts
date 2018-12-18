import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaikuangxinxiComponent } from './gaikuangxinxi.component';

describe('GaikuangxinxiComponent', () => {
  let component: GaikuangxinxiComponent;
  let fixture: ComponentFixture<GaikuangxinxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaikuangxinxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaikuangxinxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
