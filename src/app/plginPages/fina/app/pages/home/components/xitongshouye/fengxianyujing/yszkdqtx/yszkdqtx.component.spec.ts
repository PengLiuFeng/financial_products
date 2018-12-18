import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YszkdqtxComponent } from './yszkdqtx.component';

describe('YszkdqtxComponent', () => {
  let component: YszkdqtxComponent;
  let fixture: ComponentFixture<YszkdqtxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YszkdqtxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YszkdqtxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
