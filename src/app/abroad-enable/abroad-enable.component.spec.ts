import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbroadEnableComponent } from './abroad-enable.component';

describe('AbroadEnableComponent', () => {
  let component: AbroadEnableComponent;
  let fixture: ComponentFixture<AbroadEnableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbroadEnableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbroadEnableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
