import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YonghuguanliComponent } from './yonghuguanli.component';

describe('YonghuguanliComponent', () => {
  let component: YonghuguanliComponent;
  let fixture: ComponentFixture<YonghuguanliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YonghuguanliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YonghuguanliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
