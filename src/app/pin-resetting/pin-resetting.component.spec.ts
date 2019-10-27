import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinResettingComponent } from './pin-resetting.component';

describe('PinResettingComponent', () => {
  let component: PinResettingComponent;
  let fixture: ComponentFixture<PinResettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinResettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinResettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
