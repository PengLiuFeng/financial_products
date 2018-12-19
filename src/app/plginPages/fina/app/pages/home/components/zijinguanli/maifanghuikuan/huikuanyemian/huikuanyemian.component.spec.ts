import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuikuanyemianComponent } from './huikuanyemian.component';

describe('HuikuanyemianComponent', () => {
  let component: HuikuanyemianComponent;
  let fixture: ComponentFixture<HuikuanyemianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuikuanyemianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuikuanyemianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
