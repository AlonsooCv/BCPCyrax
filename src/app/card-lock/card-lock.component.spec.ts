import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLockComponent } from './card-lock.component';

describe('CardLockComponent', () => {
  let component: CardLockComponent;
  let fixture: ComponentFixture<CardLockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
