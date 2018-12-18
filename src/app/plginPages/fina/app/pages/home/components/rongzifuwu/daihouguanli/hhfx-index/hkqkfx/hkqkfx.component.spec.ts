import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HkqkfxComponent } from './hkqkfx.component';

describe('HkqkfxComponent', () => {
  let component: HkqkfxComponent;
  let fixture: ComponentFixture<HkqkfxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HkqkfxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HkqkfxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
