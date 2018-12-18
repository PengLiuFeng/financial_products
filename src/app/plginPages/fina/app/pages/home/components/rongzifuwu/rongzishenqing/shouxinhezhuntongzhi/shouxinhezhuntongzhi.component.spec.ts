import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouxinhezhuntongzhiComponent } from './shouxinhezhuntongzhi.component';

describe('ShouxinhezhuntongzhiComponent', () => {
  let component: ShouxinhezhuntongzhiComponent;
  let fixture: ComponentFixture<ShouxinhezhuntongzhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShouxinhezhuntongzhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShouxinhezhuntongzhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
