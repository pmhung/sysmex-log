import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulewizardComponent } from './rulewizard.component';

describe('RulewizardComponent', () => {
  let component: RulewizardComponent;
  let fixture: ComponentFixture<RulewizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulewizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulewizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
