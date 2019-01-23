import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhongshenComponent } from './zhongshen.component';

describe('ZhongshenComponent', () => {
  let component: ZhongshenComponent;
  let fixture: ComponentFixture<ZhongshenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhongshenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhongshenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
