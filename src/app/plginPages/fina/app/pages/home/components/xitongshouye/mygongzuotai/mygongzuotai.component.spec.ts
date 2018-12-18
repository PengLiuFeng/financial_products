import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MygongzuotaiComponent } from './mygongzuotai.component';

describe('MygongzuotaiComponent', () => {
  let component: MygongzuotaiComponent;
  let fixture: ComponentFixture<MygongzuotaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MygongzuotaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MygongzuotaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
