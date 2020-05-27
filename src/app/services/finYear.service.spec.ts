/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinYearService } from './finYear.service';

describe('Service: FinYear', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinYearService]
    });
  });

  it('should ...', inject([FinYearService], (service: FinYearService) => {
    expect(service).toBeTruthy();
  }));
});
