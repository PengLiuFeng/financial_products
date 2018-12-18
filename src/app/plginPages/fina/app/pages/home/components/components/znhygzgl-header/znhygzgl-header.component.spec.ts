import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZnhygzglHeaderComponent } from './znhygzgl-header.component';

describe('ZnhygzglHeaderComponent', () => {
  let component: ZnhygzglHeaderComponent;
  let fixture: ComponentFixture<ZnhygzglHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZnhygzglHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZnhygzglHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
