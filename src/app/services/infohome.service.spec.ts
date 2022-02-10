import { TestBed } from '@angular/core/testing';

import { InfohomeService } from './infohome.service';

describe('InfohomeService', () => {
  let service: InfohomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfohomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
