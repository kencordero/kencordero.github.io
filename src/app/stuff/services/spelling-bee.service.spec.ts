import { TestBed } from '@angular/core/testing';

import { SpellingBeeService } from './spelling-bee.service';

describe('SpellingBeeService', () => {
  let service: SpellingBeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpellingBeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
