import { TestBed } from '@angular/core/testing';

import { LookupDataService } from './lookup-data.service';

describe('LookupDataService', () => {
  let service: LookupDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LookupDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
