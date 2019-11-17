import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationTcComponent } from './activation-tc.component';

describe('ActivationTcComponent', () => {
  let component: ActivationTcComponent;
  let fixture: ComponentFixture<ActivationTcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivationTcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationTcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
