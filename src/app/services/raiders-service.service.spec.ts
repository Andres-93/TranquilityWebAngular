import { TestBed } from '@angular/core/testing';

import { RaidersServiceService } from './raiders-service.service';

describe('RaidersServiceService', () => {
  let service: RaidersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaidersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
