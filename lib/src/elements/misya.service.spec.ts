import { TestBed } from '@angular/core/testing';

import { MisyaService } from './misya.service';

describe('MisyaService', () => {
  let service: MisyaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisyaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
