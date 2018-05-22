import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3TestLevelComponent } from './step3-test-level.component';

describe('Step3TestLevelComponent', () => {
  let component: Step3TestLevelComponent;
  let fixture: ComponentFixture<Step3TestLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step3TestLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step3TestLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
