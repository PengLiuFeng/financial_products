import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeiyongshouquComponent } from './feiyongshouqu.component';

describe('FeiyongshouquComponent', () => {
  let component: FeiyongshouquComponent;
  let fixture: ComponentFixture<FeiyongshouquComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeiyongshouquComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeiyongshouquComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
