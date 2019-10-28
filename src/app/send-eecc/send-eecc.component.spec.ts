import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEECCComponent } from './send-eecc.component';

describe('SendEECCComponent', () => {
  let component: SendEECCComponent;
  let fixture: ComponentFixture<SendEECCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendEECCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEECCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
