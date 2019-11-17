import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelationTcComponent } from './cancelation-tc.component';

describe('CancelationTcComponent', () => {
  let component: CancelationTcComponent;
  let fixture: ComponentFixture<CancelationTcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelationTcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelationTcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
