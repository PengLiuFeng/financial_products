import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KehuxinxiComponent } from './kehuxinxi.component';

describe('KehuxinxiComponent', () => {
  let component: KehuxinxiComponent;
  let fixture: ComponentFixture<KehuxinxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KehuxinxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KehuxinxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
