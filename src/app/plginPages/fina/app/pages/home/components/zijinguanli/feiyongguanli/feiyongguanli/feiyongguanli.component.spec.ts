import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeiyongguanliComponent } from './feiyongguanli.component';

describe('FeiyongguanliComponent', () => {
  let component: FeiyongguanliComponent;
  let fixture: ComponentFixture<FeiyongguanliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeiyongguanliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeiyongguanliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
