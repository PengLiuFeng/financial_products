import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZijinfafangComponent } from './zijinfafang.component';

describe('ZijinfafangComponent', () => {
  let component: ZijinfafangComponent;
  let fixture: ComponentFixture<ZijinfafangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZijinfafangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZijinfafangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
