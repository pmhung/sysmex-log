import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleExplorerComponent } from './sample-explorer.component';

describe('SampleExplorerComponent', () => {
  let component: SampleExplorerComponent;
  let fixture: ComponentFixture<SampleExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
