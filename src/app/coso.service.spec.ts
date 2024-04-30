import { TestBed } from '@angular/core/testing';

import { CosoService } from './coso.service';

describe('CosoService', () => {
  let service: CosoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CosoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
