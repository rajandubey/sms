/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SocietyService } from './society.service';

describe('Service: Society', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocietyService]
    });
  });

  it('should ...', inject([SocietyService], (service: SocietyService) => {
    expect(service).toBeTruthy();
  }));
});
