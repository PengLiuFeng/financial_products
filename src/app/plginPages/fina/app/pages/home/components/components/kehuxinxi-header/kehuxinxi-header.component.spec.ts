import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KehuxinxiHeaderComponent } from './kehuxinxi-header.component';

describe('KehuxinxiHeaderComponent', () => {
  let component: KehuxinxiHeaderComponent;
  let fixture: ComponentFixture<KehuxinxiHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KehuxinxiHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KehuxinxiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
