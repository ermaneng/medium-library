import { TestBed } from '@angular/core/testing';

import { EeSayacService } from './ee-sayac.service';

describe('EeSayacService', () => {
  let service: EeSayacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EeSayacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
