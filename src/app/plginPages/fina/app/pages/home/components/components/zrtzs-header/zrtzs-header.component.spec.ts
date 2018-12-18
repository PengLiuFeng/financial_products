import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZrtzsHeaderComponent } from './zrtzs-header.component';

describe('ZrtzsHeaderComponent', () => {
  let component: ZrtzsHeaderComponent;
  let fixture: ComponentFixture<ZrtzsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZrtzsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZrtzsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
