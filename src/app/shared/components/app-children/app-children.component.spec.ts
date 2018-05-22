import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChildrenComponent } from './app-children.component';

describe('AppChildrenComponent', () => {
  let component: AppChildrenComponent;
  let fixture: ComponentFixture<AppChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
