import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JibenxinxiComponent } from './jibenxinxi.component';

describe('JibenxinxiComponent', () => {
  let component: JibenxinxiComponent;
  let fixture: ComponentFixture<JibenxinxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JibenxinxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JibenxinxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
