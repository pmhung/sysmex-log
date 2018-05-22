import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1SetGlobalPropertiesComponent } from './step1-set-global-properties.component';

describe('Step1SetGlobalPropertiesComponent', () => {
  let component: Step1SetGlobalPropertiesComponent;
  let fixture: ComponentFixture<Step1SetGlobalPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1SetGlobalPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1SetGlobalPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
