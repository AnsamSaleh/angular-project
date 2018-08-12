import { TestBed, inject } from '@angular/core/testing';

import { SimpleScerviceService } from './simple-scervice.service';

describe('SimpleScerviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleScerviceService]
    });
  });

  it('should be created', inject([SimpleScerviceService], (service: SimpleScerviceService) => {
    expect(service).toBeTruthy();
  }));
});
