import { TestBed } from '@angular/core/testing';

import { BookSimpleService } from './book-simple.service';

describe('BookSimpleService', () => {
  let service: BookSimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookSimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
