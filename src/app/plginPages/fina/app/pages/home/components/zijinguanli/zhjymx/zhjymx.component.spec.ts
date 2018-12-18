import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhjymxComponent } from './zhjymx.component';

describe('ZhjymxComponent', () => {
  let component: ZhjymxComponent;
  let fixture: ComponentFixture<ZhjymxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhjymxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhjymxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
