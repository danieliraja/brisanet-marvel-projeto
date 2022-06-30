import { TestBed } from '@angular/core/testing';

import { CommicsService } from './commics.service';

describe('CommicsService', () => {
  let service: CommicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
