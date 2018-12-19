import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaifanghuikuanComponent } from './maifanghuikuan.component';

describe('MaifanghuikuanComponent', () => {
  let component: MaifanghuikuanComponent;
  let fixture: ComponentFixture<MaifanghuikuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaifanghuikuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaifanghuikuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
