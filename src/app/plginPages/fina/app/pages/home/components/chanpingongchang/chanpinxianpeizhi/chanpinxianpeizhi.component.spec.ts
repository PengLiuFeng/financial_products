import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanpinxianpeizhiComponent } from './chanpinxianpeizhi.component';

describe('ChanpinxianpeizhiComponent', () => {
  let component: ChanpinxianpeizhiComponent;
  let fixture: ComponentFixture<ChanpinxianpeizhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanpinxianpeizhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanpinxianpeizhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
