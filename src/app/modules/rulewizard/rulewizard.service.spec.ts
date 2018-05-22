import { TestBed, inject } from '@angular/core/testing';

import { RulewizardService } from './rulewizard.service';

describe('RulewizardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RulewizardService]
    });
  });

  it('should be created', inject([RulewizardService], (service: RulewizardService) => {
    expect(service).toBeTruthy();
  }));
});
