import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2PatientsDemographicsComponent } from './step2-patients-demographics.component';

describe('Step2PatientsDemographicsComponent', () => {
  let component: Step2PatientsDemographicsComponent;
  let fixture: ComponentFixture<Step2PatientsDemographicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step2PatientsDemographicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2PatientsDemographicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
