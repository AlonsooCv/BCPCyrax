import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferQuotaComponent } from './defer-quota.component';

describe('DeferQuotaComponent', () => {
  let component: DeferQuotaComponent;
  let fixture: ComponentFixture<DeferQuotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeferQuotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeferQuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
