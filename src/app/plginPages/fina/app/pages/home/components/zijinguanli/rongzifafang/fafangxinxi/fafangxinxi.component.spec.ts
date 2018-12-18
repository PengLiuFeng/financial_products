import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FafangxinxiComponent } from './fafangxinxi.component';

describe('FafangxinxiComponent', () => {
  let component: FafangxinxiComponent;
  let fixture: ComponentFixture<FafangxinxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FafangxinxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FafangxinxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
