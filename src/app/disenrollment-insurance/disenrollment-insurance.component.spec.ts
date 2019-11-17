import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenrollmentInsuranceComponent } from './disenrollment-insurance.component';

describe('DisenrollmentInsuranceComponent', () => {
  let component: DisenrollmentInsuranceComponent;
  let fixture: ComponentFixture<DisenrollmentInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenrollmentInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenrollmentInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
