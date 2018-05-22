import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4SearchResultComponent } from './step4-search-result.component';

describe('Step4SearchResultComponent', () => {
  let component: Step4SearchResultComponent;
  let fixture: ComponentFixture<Step4SearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step4SearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step4SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
